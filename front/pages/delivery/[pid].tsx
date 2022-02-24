import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CommentaryArea from "../../components/Delivery/CommentaryArea";
import DeliveryScreen from "../../components/Delivery/DeliveryScreen";
import Document from "../../components/Delivery/Document";
import Layout from "../../components/Layout";
import { axiosInstance } from "../../utils/api";

const Delivary = () => {
  const router = useRouter();
  const { pid } = router.query;
  const isReady = router.isReady;
  const [liveID, setliveID] = useState<string>("");

  //https://www.youtube.com/watch?v=t9_HOvCU8GM

  useEffect(() => {
    console.log(pid);
    if (isReady) {
      const fetch = async () => {
        const res = await axiosInstance.get(`event/${pid}`);
        res.data.streamURL = "https://www.youtube.com/watch?v=t9_HOvCU8GM";
        const liveIDs = res.data.streamURL.split("=");
        console.log(liveIDs[1]);
        setliveID(liveIDs[1]);
        // const resYoutube = await axios.get(
        //   `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDvs5shgzFHiQz6vQO6mIyk7zZ9ic0jl4s&id=${liveIDs}&part=liveStreamingDetails`
        // );
        // console.log(resYoutube);
        // console.log(
        //   resYoutube.data.items[0].liveStreamingDetails.activeLiveChatId
        // );
      };
      fetch();
    }

    // eslint-disable-next-line
  }, [isReady]);

  console.log(liveID);

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-3/5 ">
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
        <div />
        <div className="border-4 border-blue-400" />
        <Document />
      </div>
    </Layout>
  );
};
export default Delivary;
