import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <div className="flex justify-center ">
        <div className="mr-28 ">
          <Image
            src="/leftArrow.png"
            height="100px"
            width="115px"
            alt="infra"
          />
        </div>
        <div className="flex flex-col justify-around items-center mt-16 mr-56 w-3/6 h-[750px] rounded-xl border-4 border-black">
          <div className="flex justify-between items-center w-11/12 ">
            <div>
              <Image
                src="/infra.png"
                height="100px"
                width="115px"
                alt="infra"
              />
            </div>
            <div className="text-5xl ">インフラ勉強会</div>
            <div className="mb-auto text-sm">参加人数 10人</div>
          </div>
          <div className="flex flex-col w-3/6 text-2xl ">
            <div>開催日時</div>
            <div className="border-2 border-black" />
            <div className="mt-1 text-base">2月15日 15時30分</div>
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
              <div className="ml-2 text-lg">福田 ハルキ</div>
            </div>
          </div>
          <div className="flex flex-col w-3/6 text-2xl ">
            <div>内容</div>
            <div className="border-2 border-black" />
            <div className="mt-1 text-base">
              説明時には順番で語られるビジネスモデル、UXデザイン（ペルソナ→ジャーニー）
              、UIモックアップ
              これらは会議室では行き来を繰り返しほぼ同時に形になることが
            </div>
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
    </Layout>
  );
};

export default Post;
