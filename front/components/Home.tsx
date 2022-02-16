import Image from "next/image";
import Event from "./Event";
import Header from "./Header";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-col flex-1 my-6 ml-6 text-4xl font-bold">
          直近開催イベント
          <div className="border-4 "></div>
          <div className="grid grid-cols-12 gap-4">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
        </div>
        <div className="border-4"></div>
        <div className="flex flex-col justify-center w-96">
          <div className="text-center bg-original-deep-gray">
            KYEWORD SEARCH
            <div>CATEGORYS</div>
            <div>SERVERT</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
