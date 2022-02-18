import { async } from "@firebase/util";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { axiosInstance as axios } from "../utils/api";
import Layout from "./Layout";

type Event = {
  id: string;
  title: string;
  detail: string;
  image: string;
  orgnizer: string;
  date: string;
  parcitipants: number;
  tags: string[];
};

const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [event, setEvent] = useState<Event>({
    id: "",
    title: "インフラ勉強会",
    detail:
      "説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー、UIモックアップこれらは会議室では行き来を繰り返しほぼ同時に形になることが",
    image: "infra.png",
    orgnizer: "福田 ハルキ",
    date: "2月15日 15時30分",
    parcitipants: 0,
    tags: [],
  });

  console.log(pid);

  useEffect(() => {
    axios.get(`event/${pid}`).then((res) => {
      setEvent(res.data);
    });
  });

  const registration = () => {
    axios.post(`/event/register/${pid}`).then((res) => {
      console.log(res.statusText);
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="mr-28 ">
        <Image src="/leftArrow.png" height="100px" width="115px" alt="infra" />
      </div>
      <div className="flex flex-col justify-around items-center mt-16 mr-56 w-3/6 h-[750px] rounded-xl border-4 border-black">
        <div className="flex justify-between items-center w-11/12 ">
          <div>
            <Image
              src={`/${event.image}`}
              height="100px"
              width="115px"
              alt="infra"
            />
          </div>
          <div className="text-5xl ">{event.title}</div>
          <div className="mb-auto text-sm">参加人数 {event.parcitipants}</div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>開催日時</div>
          <div className="border-2 border-black" />
          <div className="mt-1 text-base">{event.date}</div>
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
            <div className="ml-2 text-lg">{event.orgnizer}</div>
          </div>
        </div>
        <div className="flex flex-col w-3/6 text-2xl ">
          <div>内容</div>
          <div className="border-2 border-black" />
          <div className="mt-1 text-base">{event.detail}</div>
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
          <button className="p-4 text-white bg-blue-400 rounded-md">
            イベントに参加登録
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
