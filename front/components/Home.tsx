import { getAuth, getIdToken, signOut } from "firebase/auth";
import Image from "next/image";
import { useContext, useState } from "react";

import { axiosInstance as axios } from "../utils/api";
import { firebaseApp } from "../utils/firebase";
import { AuthContext } from "./Auth";
import Event from "./Event/Event";

import Layout from "./Layout";
import SelectSort from "./SelectSort";
import Sidebar from "./Sidebar";

type Event = {
  id: number;
  title: string;
  imageURL: string;
  organizer: string;
  datetime: string;
  tags: string[];
  status: string;
  parcitipants: number;
};

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const [events, setEvents] = useState<Event[]>([]);

  // axios.get("/event").then((res) => {
  //   setEvents([...res.data]);
  // });

  // axios.get("/test").then((res) => {
  //   console.log(res);
  // });

  axios.get("/event").then((res) => {
    console.log(res);
  });

  console.log(events);

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
          <div className="my-4 border-4" />
          <div className="grid grid-cols-12 gap-4">
            {/* {events.map((event) => (
              <Event
                key={event.id}
                id={event.id}
                title={event.title}
                imageURL={event.imageURL}
                organizer={event.organizer}
                datetime={event.datetime}
                tags={event.tags}
                status={event.status}
                parcitipants={event.parcitipants}
              />
            ))} */}
            {/* <Event /> */}
            {/* 
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            />
            <Event
              id={1}
              title={"インフラ勉強会"}
              imageURL={"/infra.png"}
              organizer={"福田春樹"}
              datetime={"2020/10/10"}
              tags={["インフラ", "フロント"]}
              status={"開催中"}
              parcitipants={10}
            /> */}
          </div>
        </div>
        <div className="border-4" />
        <div className="flex flex-col justify-start w-3/12 ">
          <div className=" ">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
