import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useContext, useRef, useEffect } from "react";
import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import EventReviw from "./EventReview";
import Star from "./Star";

type Review = {
  comment: string;
  commentedBy: string;
  id: number;
  profileImageURL: string;
  stars: number;
};

type Event = {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  organizer: {
    id: number;
    name: string;
    profileImageURL: string;
  };
  datetime: string;
  participants: number;
  tags: string[];
  document: string;
  streamURL: string;
};

const EventAfterDetail = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(3);
  const { currentUser, currentIdToken } = useContext(AuthContext);
  const [reviews, setReviews] = useState<Review[]>([]);
  const comment = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const isReady = router.isReady;
  const { pid } = router.query;

  const [event, setEvent] = useState<Event>({
    id: 1,
    title: "",
    description: "",
    imageURL: "",
    organizer: {
      id: 1,
      name: "",
      profileImageURL: "/fukuda.png",
    },
    datetime: "",
    participants: 0,
    tags: [""],
    document: "",
    streamURL: "",
  });

  useEffect(() => {
    if (isReady) {
      axios.get(`/event/${pid}/feedback`).then((res) => {
        console.log(res);
        setReviews([...res.data]);
      });

      axios
        .get(`event/${pid}`)
        .then((res) => {
          console.log(res);
          setEvent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isReady]);

  // console.log(reviw);

  const regsiterReview = () => {
    axios.interceptors.request.use((request) => {
      if (currentIdToken && request.headers != null) {
        request.headers = { Authorization: `Bearer ${currentIdToken}` };
      }
      return request;
    });

    if (currentIdToken) {
      console.log(currentIdToken);
      axios
        .post(`/event/${pid}/feedback`, {
          stars: selectedStars,
          comment: comment.current?.value,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-center items-center mr-48 ">
        <div className="mr-14">
          <Image
            src={`/EventImage/${event.imageURL}.png`}
            height="110px"
            width="135 px"
            alt="infra"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl">
            {moment(event.datetime).format("YYYY年MM月DD日 HH時mm分")}~
          </div>
          <div className="text-5xl font-bold">{event.title}</div>
        </div>
      </div>
      <div className="mx-auto w-3/4 border border-gray-400" />
      <div className="flex mt-20">
        <div className="flex flex-col ml-10 w-8/12 h-[600px]">
          <div className="flex flex-col justify-between h-[600px] md:ml-20 lg:ml-32 xl:ml-56">
            <div className="flex flex-col gap-8 text-3xl">
              <div className="font-bold">details</div>
              <div className="text-2xl">{event.description}</div>
            </div>
            <div className="flex flex-col mb-12 text-2xl">
              <div>
                <button className="flex py-2 px-5 border-4">
                  <Image
                    src={`/markdown.png`}
                    height="30px"
                    width="30 px"
                    alt="infra"
                  />
                  <div className="ml-2">MarkDown</div>
                </button>
              </div>
              <div className="pt-4">
                <button className="flex py-2 px-5 pr-12 border-4">
                  <Image
                    src={`/youtube.png`}
                    height="30px"
                    width="30 px"
                    alt="infra"
                  />
                  <div className="ml-2">Youtube</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-4 w-72 ">
          <div className="flex items-center mb-2 ml-10">
            <Image
              src={`${event.organizer.profileImageURL}`}
              height="40px"
              width="40 px"
              alt="infra"
              className="rounded-full"
            />
            <div className="ml-4 text-2xl">{event.organizer.name}</div>
          </div>
          <div className="border border-black " />
          <div className="mt-14 mr-12 mb-2 text-xl text-center">
            参加予定人数 {event.participants}人
          </div>
          <div className="border border-black" />

          <div className="text-xl">
            <div className="mt-12 ">Tags </div>
            {event.tags.map((tag, index) => {
              return (
                <button className="rounded-md border-2" key={index}>
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="border border-black" />
        </div>
      </div>
      <div className="border-2" />

      <div className="mt-10 h-40 ">
        <div className="flex flex-col ">
          <div className="flex ml-60 ">
            <Image
              src={`/comment.png`}
              height="50px"
              width="50 px"
              alt="infra"
            />
            <div className="mt-2 ml-3 text-2xl">{reviews.length}</div>
          </div>
          <div className="flex ml-72">
            <div className="flex flex-col ">
              <Image
                src={
                  currentUser?.photoURL ? currentUser.photoURL : "/white.png"
                }
                height="50px"
                width="50 px"
                alt="infra"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2 ml-4 w-8/12">
              <div className="flex text-2xl">
                {[...Array(totalStars)].map((n, i) => (
                  <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                  />
                ))}
              </div>

              <textarea
                className="h-20 border-4"
                placeholder="フィードバックを書きましょう"
                ref={comment}
              />
              <div className="text-right ">
                <button
                  className="py-1 px-6 mr-1 text-white bg-blue-400"
                  onClick={regsiterReview}
                >
                  送信
                </button>
              </div>
            </div>
          </div>
          {reviews.map((review) => (
            <EventReviw
              key={review.id}
              comment={review.comment}
              commentedBy={review.commentedBy}
              profileImageURL={review.profileImageURL}
              stars={review.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAfterDetail;
