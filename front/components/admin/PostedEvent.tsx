import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import FrontendImage from "../../public/EventImage/web.png";
import DeliveryURL from "./DeliveryURL";

type Props = {
  id: number;
  title: string;
  imageURL: string;
  participants: string;
  datetime: string;
};

const PostedEvent = (props: Props) => {
  const { id, title, imageURL, participants, datetime } = props;
  console.log(`/EventImage/${imageURL}.png`);
  const log = () => {
    console.log("log");
  };
  return (
    <button
      className="flex justify-center mt-10 w-8/12 rounded-lg shadow-md "
      onClick={log}
    >
      <div className="w-full bg-original-gray rounded-lg border-2 border-slate-200">
        <div className="rounded-lg shadow-sm">
          <div className=" flex flex-col text-left ">
            <div className="flex-auto ml-7">開催日程</div>
            <div className="absolute ml-96">参加予定人数</div>
            <div className="ml-20 text-lg">
              {moment(datetime).format("YYYY年MM月DD日 HH時mm分")}
            </div>
            <div className="absolute pl-20 mt-6 ml-96 text-lg">
              {participants}人
            </div>
          </div>
        </div>
        <div className="h-28 bg-white">
          <div className="absolute my-2 ml-12">
            <Image
              className="h-auto"
              src={`/EventImage/${imageURL}.png`}
              alt="FrontendImage"
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="absolute mt-10 ml-52 text-3xl font-semibold text-slate-800">
              {title}
            </div>
          </div>
          <div className="flex justify-end ">
            <DeliveryURL id={id} />
          </div>
          <div className="flex justify-end">
            <button
              className="py-2 px-8 mt-2 mr-3 font-bold text-gray-800 bg-white hover:bg-gray-200 rounded-md border-2 border-slate-200"
              type="button"
            >
              <div className="px-2">勉強会内容の確認</div>
            </button>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PostedEvent;
