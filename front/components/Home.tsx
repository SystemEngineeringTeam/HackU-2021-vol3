import { getAuth, getIdToken, signOut } from "firebase/auth";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

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
  participants: number;
};

const Home = () => {
  const { currentUser, currentIdToken } = useContext(AuthContext);
  const [events, setEvents] = useState<Event[]>([]);

  
 

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("/event");
      setEvents([...res.data]);
    };
    fetchEvents();
  }, []);

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
            {events.map((event) => (
              <Event
                key={event.id}
                id={event.id}
                title={event.title}
                imageURL={event.imageURL}
                organizer={event.organizer}
                datetime={event.datetime}
                tags={event.tags}
                status={event.status}
                participants={event.participants}
              />
            ))}
            {/* <Event /> */}

            <div className="flex col-span-4 col-start-4 justify-around pt-4 text-lg ">
              <button className="p-1 border-2 border-gray-400">前へ</button>

              <button className="px-2 border-2 border-gray-400">1</button>
              <button className="px-2 border-2 border-gray-400">2</button>
              <button className="px-2 border-2 border-gray-400">3</button>
              <button className="px-2 border-2 border-gray-400">4</button>
              <button className="px-2 border-2 border-gray-400">5</button>
              <div>...</div>
              <button className="border-2 border-gray-400" >次へ</button>
            </div>
          </div>
        </div>
        <div className="h-[950px] border-4" />
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
