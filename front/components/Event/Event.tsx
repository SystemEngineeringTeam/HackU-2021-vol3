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
  const log = () => {
    console.log("log");
  };

  return (
    <button
      className="col-span-7 col-start-3 mt-2 h-20 bg-original-gray rounded-lg shadow-md"
      onClick={log}
    >
      <div className="flex justify-between mt-2 h-16 rounded-lg">
        <div className="flex basis-4/6 bg-white rounded-lg shadow-sm">
          <Image src="/infra.png" alt="" width="75px" height="40px" />
          <div className="flex flex-col text-left ">
            <div className="flex-auto md:text-lg lg:text-2xl">
              {props.title}
            </div>
            <div className="text-sm">{props.datetime}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-base">
          <div>参加人数 {props.parcitipants} 人</div>
          <div className="text-center text-original-red bg-white rounded-lg border-2 border-original-red">
            配信中
          </div>
        </div>
      </div>
    </button>
  );
};

export default Event;
