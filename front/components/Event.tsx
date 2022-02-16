import Image from "next/image";
import Header from "./Header";
import Layout from "./Layout";

const Event = () => {
  return (
    <div className="col-span-7 col-start-3 mt-2 h-20 bg-original-gray rounded-lg shadow-md">
      <div className="flex justify-between mt-2 h-16 rounded-lg">
        <div className="flex bg-white rounded-lg shadow-sm">
          <Image src="/infra.png" alt="" width="75px" height="40px" />
          <div className="flex flex-col pr-72">
            <div className="flex-auto text-2xl">インフラ勉強会</div>
            <div className="text-sm">2022年2月10日 16:00</div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-base">
          <div>参加人数 10人</div>
          <div className="text-center text-original-red bg-white rounded-lg border-2 border-original-red">
            配信中
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
