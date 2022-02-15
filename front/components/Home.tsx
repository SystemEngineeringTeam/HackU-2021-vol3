import Image from "next/image";
import Event from "./Event";
import Header from "./Header";
import Layout from "./Layout";
import SelectSort from "./SelectSort";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-col flex-1 my-6 ml-6 text-4xl font-bold">
          <div className="flex justify-between">
            <div> 直近開催イベント</div>
            <div>
              <SelectSort />
            </div>
          </div>
          <div className="my-4 border-4"></div>
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
        <div className="flex flex-col justify-start w-96 ">
          <div className=" ">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
