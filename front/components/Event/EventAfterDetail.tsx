import Image from "next/image";

const EventAfterDetail = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-center items-center mr-48 bg-slate-200">
        <div className="mr-14">
          <Image src={`/infra.png`} height="120px" width="145 px" alt="infra" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl">2月15日 15時30分</div>
          <div className="text-5xl">インフラ勉強会</div>
        </div>
      </div>
      <div className="border " />
      <div className="flex">
        <div className="flex flex-col">
          <div>ss</div>
        </div>
        <div className="flex flex-col">
          <div>ss</div>
        </div>
      </div>
    </div>
  );
};

export default EventAfterDetail;
