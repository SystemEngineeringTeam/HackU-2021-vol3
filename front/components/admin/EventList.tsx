import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import FrontendImage from "../../public/EventImage/web.png";
import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import DeliveryURL from "./DeliveryURL";
import PostedEvent from "./PostedEvent";
type hostEvent = {
  id: number;
  title: string;
  imageURL: string;
  participants: string;
  datetime: string;
};

const EventList = () => {
  const log = () => {
    console.log("log");
  };
  const { currentUser, currentIdToken } = useContext(AuthContext);
  const [hostEvents, setHostEvents] = useState<hostEvent[]>([]);

  useEffect(() => {
    //新規ユーザか判定するAPIを叩く
    //新規ユーザならisNewUserをtrueにする
    axios.interceptors.request.use((request) => {
      if (currentIdToken && request.headers != null) {
        request.headers = { Authorization: `Bearer ${currentIdToken}` };
      }
      return request;
    });

    if (currentIdToken) {
      console.log(currentIdToken);
      axios
        .get(`/events/hosted`)
        .then((res) => {
          //成功したのでuserは存在する
          console.log(res);
          setHostEvents(res.data);
        })
        .catch((err) => {
          //失敗したのでuserは存在しない
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, [currentIdToken]);

  return (
    <>
      <div className="flex justify-center">
        {hostEvents.map((event) => {
          <PostedEvent
            id={event.id}
            title={event.title}
            imageURL={event.title}
            participants={event.participants}
            datetime={event.datetime}
            key={event.id}
          />;
        })}
      </div>
    </>
  );
};

export default EventList;
