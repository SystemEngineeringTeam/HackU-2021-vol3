import Image from "next/image";

const EventReviw = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex mt-12 ml-72 h-12 ">
          <div className="flex ">
            <Image
              src={`/fukuda.png`}
              height="50px"
              width="45 px"
              alt="infra"
            />
          </div>
          <div className="flex-col ml-4 text-2xl">
            <div>Super_Tikuwa</div>
            <div>★★★★★</div>
          </div>
        </div>
        <div className="mt-8 ml-[275px]">
          学生支援機構の奨学金は、院まで出れば実績に応じて一部ないし全額返済免除になるシステムがあるけど、旧帝大クラスじゃないと枠数少ないらしいね
        </div>
      </div>
    </div>
  );
};

export default EventReviw;
