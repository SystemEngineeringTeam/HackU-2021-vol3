import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  id: number;
  title: string;
  imageURL: string;
  organizer: string;
  datetime: string;
  tags: string[];
  status: string;
  participants: number;
};

const Event = (props: Props) => {
  const router = useRouter();

  const transitionPage = () => {
    if (props.status === "onair") {
      router.push(`/delivery/${props.id}`);
    } else if (props.status === "schedule") {
      router.push(`/event/${props.id}`);
    } else {
      router.push(`/event/after/${props.id}`);
    }
  };

  const status = () => {
    if (props.status === "schedule") {
      return (
        <div className="text-center bg-white rounded-lg border-2 border-black shadow-lg text-original-black">
          開催前
        </div>
      );
    } else if (props.status === "onair") {
      return (
        <div className="text-center bg-white rounded-lg border-2 text-original-red border-original-red">
          配信中
        </div>
      );
    } else {
      return (
        <div className="text-center text-original-black bg-white rounded-lg border-2 border-black shadow-lg">
          終了
        </div>
      );
    }
  };

  return (
    <button
      className="col-span-7 col-start-3 mt-2 h-20 rounded-lg shadow-md bg-original-gray"
      onClick={transitionPage}
    >
      <div className="flex justify-between mt-2 h-16 rounded-lg">
        <div className="flex basis-4/6 bg-white rounded-lg shadow-sm">
          <Image
            src={`/EventImage/${props.imageURL}.png`}
            alt=""
            width="75px"
            height="40px"
          />
          <div className="flex flex-col ml-4 text-left">
            <div className="flex-auto md:text-lg lg:text-2xl">
              {props.title}
            </div>
            <div className="text-sm">
              {moment(props.datetime).format("YYYY年MM月DD日 HH時mm分")}~
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-base">
          <div>参加人数 {props.participants} 人</div>
          {status()}
        </div>
      </div>
    </button>
  );
};

export default Event;
