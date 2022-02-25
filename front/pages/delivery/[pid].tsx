import { async } from "@firebase/util";
import axios, { Axios, AxiosResponse } from "axios";
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

  const ref = React.createRef<NotificationSystem.System>();
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  let uid = 0;
  // const [activeLiveChatID, setActiveLiveChatID] = useState("");
  let activeLiveChatID = "";
  let nextPageToken: string = "";
  // const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const [document, setDocument] = useState<string>("");

  //https://www.youtube.com/watch?v=t9_HOvCU8GM
  useEffect(() => {
    if (isReady) {
      const fetch = async () => {
        const res = await axiosInstance.get(`event/${pid}`);

        console.log(res.data.imageURL);
        setDocument(res.data.document);

        // res.data.streamURL = "https://www.youtube.com/watch?v=t9_HOvCU8GM";
        const liveIDs = res.data.streamURL.split("=");

        setliveID(liveIDs[1]);
        //動画IDからライブコメントIDを取得する
        const resYoutube = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD1-aA4T8r0P_o-yNEQGhObFBYS3WWVKec&id=${liveIDs}&part=liveStreamingDetails`
        );

        activeLiveChatID =
          resYoutube.data.items[0].liveStreamingDetails.activeLiveChatId;
        console.log(activeLiveChatID);
      };

      fetch();
    }
    // eslint-disable-next-line
  }, [isReady]);

  useEffect(() => {
    const interval = setInterval(() => {
      questionCheck();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (comment !== "") {
      let q = comment.slice(1);
      notify(q);
    }
  }, [comment]);

  const questionCheck = async () => {
    //コメントを取得
    let params = {
      key: "AIzaSyD1-aA4T8r0P_o-yNEQGhObFBYS3WWVKec",
      part: "snippet",
      liveChatId: activeLiveChatID,
      pageToken: nextPageToken,
    };
    console.log(params);
    axios
      .get("https://www.googleapis.com/youtube/v3/liveChat/messages", {
        params: params,
      })
      .then((res) => {
        nextPageToken = res["data"]["nextPageToken"];

        // 配列の長さが0じゃない時
        if (res["data"]["items"].length != 0) {
          res["data"]["items"].forEach((element: any) => {
            console.log(
              element["snippet"]["textMessageDetails"]["messageText"]
            );

            if (
              element["snippet"]["textMessageDetails"]["messageText"][0] === "?"
            ) {
              setComment(
                element["snippet"]["textMessageDetails"]["messageText"]
              );
            }
          });
        }
      });
  };


  const notify = (comment: string) => {
    /* @ts-ignore */
    const notification = ref.current;
    notification?.addNotification({
      title,
      message: comment,
      level: "info",
      position: "tl",
      uid: uid,
      autoDismiss: 30,
    });
    console.log(uid);
    uid++;
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
        <Document document={document} />
      </div>
    </Layout>
  );
};
export default Delivary;
