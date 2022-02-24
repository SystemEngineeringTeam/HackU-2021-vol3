import { getIdToken } from "firebase/auth";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import BeforeScreenToReturn from "../BeforeScreenToReturn";
import EventReviw from "./EventReview";

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

const NewEventDetail = () => {
  const [event, setEvent] = useState<Event>({
    id: 1,
    title: "インフラ勉強会",
    description:
      "説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー、UIモックアップこれらは会議室では行き来を繰り返しほぼ同時に形になることが",
    imageURL: "infra.png",
    organizer: {
      id: 1,
      name: "山田太郎",
      profileImageURL:
        "https://lh3.googleusercontent.com/a-/AOh14GiymahR6RP1EQWxI903C1KL089dD_SBewtNdicu=s96-c",
    },
    datetime: "",
    participants: 0,
    tags: ["ss", "ss"],
    document: "ss",
    streamURL: "ss",
  });

  const router = useRouter();
  const isReady = router.isReady;
  const { pid } = router.query;
  const { currentUser, currentIdToken } = useContext(AuthContext);

  useEffect(() => {
    console.log(pid);
    if (isReady) {
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
    // eslint-disable-next-line
  }, [isReady]);

  const registration = () => {
    if (currentUser != null) {
      axios.interceptors.request.use((request) => {
        if (currentIdToken && request.headers != null) {
          request.headers = { Authorization: `Bearer ${currentIdToken}` };
        }
        return request;
      });
      axios
        .post(`/event/register/${pid}`)
        .then((res) => {
          console.log(res.statusText);
          console.log(res.data);
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
          <div className="flex flex-col gap-24 justify-start h-[600px] md:ml-20 lg:ml-32 xl:ml-56">
            <div className="flex flex-col gap-8 text-3xl ">
              <div className="font-bold">details</div>
              <div className=" text-2xl break-all ">{event.description}</div>
            </div>
            <div className="flex flex-col items-end mr-20 text-2xl ">
              <button
                className="flex py-4 px-5 ml-2 text-white bg-blue-400 rounded-xl"
                onClick={registration}
              >
                イベントに参加登録
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-4 w-72 ">
          <div className="flex items-center mb-1 ml-4">
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
          <div className="mt-14 mb-2 text-xl text-center">
            参加予定人数 {event.participants}人
          </div>
          <div className="border border-black" />
          <div className="text-xl">
            <div className="mt-12 ">Tags </div>
            <div className="flex gap-4">
              {event.tags ? (
                event.tags.map((tag, index) => {
                  return (
                    <button className="rounded-md border-2" key={index}>
                      {tag}
                    </button>
                  );
                })
              ) : (
                <div />
              )}
            </div>
          </div>
          <div className="border border-black" />
        </div>
      </div>
    </div>
  );
};
export default NewEventDetail;
