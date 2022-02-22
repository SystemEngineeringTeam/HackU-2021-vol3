import { getIdToken } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import BeforeScreenToReturn from "../BeforeScreenToReturn";
import EventReviw from "./EventReview";

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

const NewEventDetail = () => {
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

  const router = useRouter();
  const { pid } = router.query;
  const { currentUser, currentIdToken } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`event/${pid}`)
      .then((res) => {
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
          <Image src={`/infra.png`} height="110px" width="135 px" alt="infra" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl">2月15日 15時30分~</div>
          <div className="text-5xl">インフラ勉強会</div>
        </div>
      </div>
      <div className="mx-auto w-3/4 border border-black" />
      <div className="flex mt-20">
        <div className="flex flex-col ml-10 w-8/12 h-[600px]">
          <div className="flex flex-col justify-between h-[600px] md:ml-20 lg:ml-32 xl:ml-56">
            <div className="text-3xl">
              details
              <div className="text-3xl">
                説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー）、UIモックアップ
                これらは会議室では行き来を繰り返しほぼ同時に形になることが多くあります。
                会議中にリアルタイムにデザインを行うUXデザイナーとビジネス・システム・ユーザーモデルを並行検討するプロダクトマネージャーの
                オンラインでの掛け合い漫才的仕事風景を中継いたします。
                残り時間で「何を考え、何故そうなったのか？」をわかりやすく解説します。
              </div>
            </div>
            <div className="flex flex-col items-center mb-14 text-2xl">
              <button className="flex py-4 px-5 pr-12 bg-blue-400 rounded-md border-4">
                <div className="ml-2 text-white">イベントに参加登録</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-4 w-72 ">
          <div className="flex items-center mb-2">
            <Image
              src={`/fukuda.png`}
              height="40px"
              width="40 px"
              alt="infra"
            />
            <div className="ml-4 text-2xl">super_Tikuwa</div>
          </div>
          <div className="border border-black " />
          <div className="mt-14 text-xl text-center">参加予定人数 10人</div>
          <div className="border border-black" />

          <div className="text-xl">
            <div className="mt-12 ">Tags </div>
            <button className="">フロントエンド,</button>
            <button>バックエンド</button>
          </div>
          <div className="border border-black" />
        </div>
      </div>
    </div>
  );
};
export default NewEventDetail;
