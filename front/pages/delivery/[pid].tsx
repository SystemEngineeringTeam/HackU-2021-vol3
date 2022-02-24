import { async } from "@firebase/util";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, createRef } from "react";
import ReactMarkdown from "react-markdown";
import NotificationSystem from "react-notification-system";
import CommentaryArea from "../../components/Delivery/CommentaryArea";
import DeliveryScreen from "../../components/Delivery/DeliveryScreen";
import Document from "../../components/Delivery/Document";
import Layout from "../../components/Layout";
import { axiosInstance } from "../../utils/api";

type TextMessageObject = {
  id: string;
  text: string;
};

const Delivary = () => {
  const router = useRouter();
  const { pid } = router.query;
  const isReady = router.isReady;
  const [liveID, setliveID] = useState<string>("");

  const ref = React.createRef();
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [uid, setUid] = React.useState(0);
  const [autoDismiss, setAutoDismiss] = React.useState(5);
  const [activeLiveChatID, setActiveLiveChatID] = useState("");
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [comments, setComments] = useState<TextMessageObject[]>([]);

  //https://www.youtube.com/watch?v=t9_HOvCU8GM
  useEffect(() => {
    if (isReady) {
      const fetch = async () => {
        const res = await axiosInstance.get(`event/${pid}`);
        console.log(res);

        res.data.streamURL = "https://www.youtube.com/watch?v=t9_HOvCU8GM";
        const liveIDs = res.data.streamURL.split("=");

        setliveID(liveIDs[1]);
        //動画IDからライブコメントIDを取得する
        const resYoutube = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDvs5shgzFHiQz6vQO6mIyk7zZ9ic0jl4s&id=${liveIDs}&part=liveStreamingDetails`
        );

        setActiveLiveChatID(
          resYoutube.data.items[0].liveStreamingDetails.activeLiveChatId
        );
      };
      console.log("hello");

      fetch();
    }
    // eslint-disable-next-line
  }, [isReady]);

  useEffect(() => {
    setInterval(questionCheck, 10000);
  });

  const questionCheck = async () => {
    //コメントを取得
    axios
      .get("https://www.googleapis.com/youtube/v3/liveChat/messages", {
        params: {
          key: "AIzaSyAWufHsGJN1P2jPmGpTL2WJZbC2Go91140",
          part: "snippet",
          liveChatId: activeLiveChatID,
          pageToken: nextPageToken,
        },
      })
      .then((res) => {
        const textMessageObjectArray: TextMessageObject[] = [];
        for (let index = 0; index < res["data"]["items"].length; index++) {
          const element =
            res["data"]["items"][index]["snippet"]["textMessageDetails"][
              "messageText"
            ];
          if (element[0] === "?") {
            notify(element);
          }

          console.log(
            res["data"]["items"][index]["snippet"]["textMessageDetails"][
              "messageText"
            ]
          );
          const id = res["data"]["items"][index]["id"];
          textMessageObjectArray.push({ id: id, text: element });
        }
        console.log(textMessageObjectArray);
        setComments([...comments, ...textMessageObjectArray]);
        setNextPageToken(res["data"]["nextPageToken"]);
      });
  };

  const notify = (comment: string) => {
    /* @ts-ignore */
    ref.current.addNotification({
      title,
      message,
      level: "info",
      position: "tl",
      uid,
      autoDismiss,
      action: {
        label: comment,
        // callback: () => window.open("https://twitter.com/crohaco"),
      },
    });
    setUid(uid + 1);
  };

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-3/5">
          <div className="flex">
            <iframe
              width="1200"
              height="600"
              src={`https://www.youtube.com/embed/${liveID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button onClick={questionCheck}>ok</button>
          <div className="flex">
            <iframe
              width="1200"
              height="350"
              frameBorder="0"
              src={`https://www.youtube.com/live_chat?v=${liveID}&embed_domain=localhost`}
              allowFullScreen
            />
          </div>
        </div>
        {/* @ts-ignore */}
        <NotificationSystem ref={ref} />
        <div />
        <div className="border-4 border-blue-400" />
        <Document />
      </div>
    </Layout>
  );
};
export default Delivary;
