import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Comment from "./Comment";

const CommentaryArea = () => {
  // const [nextPageToken, setNextPageToken] = useState<string>("");

  const getComment = () => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KC0hwZE81S3EzbzdZKicKGFVDR0NaQVlxNVh4b2psX3RTWGNWSmhpURILSHBkTzVLcTNvN1k&part=snippet&key=AIzaSyDvs5shgzFHiQz6vQO6mIyk7zZ9ic0jl4s&="
      )
      .then((res) => {
        console.log(
          res["data"]["items"][0]["snippet"]["textMessageDetails"][
            "messageText"
          ]
        );
      });
  };

  // setInterval(getComment, 3000);

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex overflow-y-auto flex-col mx-8 mt-8 h-56 bg-slate-100 border border-slate-200 shadow-md">
          <div className="flex items-center">
            <div>
              <Image src="/mikan.png" height="50" width="50px" alt="mikan" />
            </div>
            <div className="ml-2">mikan_54951</div>
            <div className="ml-2">面白そう</div>
          </div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="mx-8 mt-8">
          <input
            type="text"
            className="w-full h-12 rounded-xl border-2"
            placeholder="コメントを投稿"
          />
        </div>
      </div>
    </>
  );
};

export default CommentaryArea;
