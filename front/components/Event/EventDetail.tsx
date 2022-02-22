import { getIdToken } from "firebase/auth";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import BeforeScreenToReturn from "../BeforeScreenToReturn";

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

const EventDetail = () => {
  const [event, setEvent] = useState<Event>({
    id: 1,
    title: "インフラ勉強会",
    description:
      "説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー、UIモックアップこれらは会議室では行き来を繰り返しほぼ同時に形になることが",
    imageURL: "infra.png",
    organizer: {
      id: 1,
      name: "山田太郎",
      profileImageURL: "yamada.png",
    },
    datetime: "",
    participants: 0,
    tags: ["ss", "ss"],
    document: "ss",
    streamURL: "ss",
  });
  const router = useRouter();
  const { pid } = router.query;
  const { currentUser, currentIdToken } = useContext(AuthContext);

  console.log(event);

  useEffect(() => {
    // console.log(pid);
    axios
      .get(`event/1`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);

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
          setEvent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="mt-12 mr-28">
        <Link href="/">
          <a>
            <BeforeScreenToReturn />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-around items-center mt-16 mr-56 w-3/6 h-[750px] rounded-xl border-4 border-black">
        <div className="flex justify-between items-center w-11/12 ">
          <div>
            {/* <Image
              src={`/${event.imageURL}`}
              height="100px"
              width="120 px"
              alt="infra"
            /> */}
            {/* <img
              src="http://drive.google.com/uc?export=view&id=133ffNFxLsZdAPk7NAaJTgWghZQDYUnQb"
              alt=""
            /> */}
          </div>
          <div className="text-5xl ">{event.title}</div>
          <div className="mb-auto text-sm">
            参加人数 {event.participants} 人
          </div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>開催日時</div>
          <div className="border-2 border-black" />
          <div className="mt-1 text-base">
            {moment(event.datetime).format("YYYY年MM月DD日 HH時mm分")}
          </div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>主催者</div>
          <div className="border-2 border-black" />
          <div className="flex items-end mt-2 ml-1">
            <Image
              src="/fukuda.png"
              height="30px"
              width="30px"
              alt="infra"
              className="rounded-full"
            />
            <div className="ml-2 text-lg">{event.organizer.name}</div>
          </div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>内容</div>
          <div className="border-2 border-black" />
          <div className="mt-1 text-base">{event.description}</div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>資料</div>
          <div className="border-2 border-black" />
          <div className="mt-1 text-base">
            説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー）
            、UIモックアップ
            これらは会議室では行き来を繰り返しほぼ同時に形になることが
          </div>
        </div>
        <div>
          <button
            className="p-4 text-white bg-blue-400 rounded-md"
            onClick={registration}
          >
            イベントに参加登録
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
