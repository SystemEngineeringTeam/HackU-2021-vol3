import moment from "moment";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  imageURL: string;
  organizer: string;
  datetime: string;
  tags: string[];
  status: string;
  parcitipants: number;
};

const Event = (props: Props) => {
  const { title, imageURL, organizer, datetime, status, parcitipants, tags } =
    props;

  const log = () => {
    console.log("log");
  };

  return (
    <button
      className="col-span-7 col-start-3 mt-2 h-20 rounded-lg shadow-md bg-original-gray"
      onClick={log}
    >
      <div className="flex justify-between mt-2 h-16 rounded-lg">
        <div className="flex basis-4/6 bg-white rounded-lg shadow-sm">
          <Image src="/infra.png" alt="" width="75px" height="40px" />
          <div className="flex flex-col text-left ">
            <div className="flex-auto md:text-lg lg:text-2xl">{title}</div>
            <div className="text-sm">
              {moment(datetime).format("YYYY年MM月DD日 HH時mm分")}~
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-base">
          <div className="flex ">
            <div>参加予定人数 {parcitipants} 人</div>
          </div>
          <div className="flex justify-end mr-1">
            <div className="px-6 text-center bg-white rounded-lg border-2 text-original-red border-original-red">
              配信中
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Event;
