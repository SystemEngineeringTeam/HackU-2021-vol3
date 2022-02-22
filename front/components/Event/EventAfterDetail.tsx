import Image from "next/image";
import EventReviw from "./EventReview";

const EventAfterDetail = () => {
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
            <div className="flex flex-col text-2xl ">
              <div>
                <button className="flex py-2 px-5 border-4">
                  <Image
                    src={`/markdown.png`}
                    height="30px"
                    width="30 px"
                    alt="infra"
                  />
                  <div className="ml-2">MarkDown</div>
                </button>
              </div>
              <div className="pt-4">
                <button className="flex py-2 px-5 pr-12 border-4">
                  <Image
                    src={`/youtube.png`}
                    height="30px"
                    width="30 px"
                    alt="infra"
                  />
                  <div className="ml-2">Youtube</div>
                </button>
              </div>
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

      <div className="mt-10 h-40 ">
        <div className="flex flex-col ">
          <div className="flex ml-60 ">
            <Image
              src={`/comment.png`}
              height="50px"
              width="50 px"
              alt="infra"
            />
            <div className="mt-2 ml-3 text-2xl">58</div>
          </div>
          <div className="flex ml-72">
            <div className="flex flex-col ">
              <Image
                src={`/fukuda.png`}
                height="50px"
                width="50 px"
                alt="infra"
              />
            </div>
            <div className="flex flex-col ml-4 w-8/12 ">
              <div className="text-2xl">☆☆☆☆☆</div>
              <textarea
                className="h-20 border-4"
                placeholder="フィードバックを書きましょう"
              />
            </div>
          </div>

          <EventReviw />
        </div>
      </div>
    </div>
  );
};

export default EventAfterDetail;
