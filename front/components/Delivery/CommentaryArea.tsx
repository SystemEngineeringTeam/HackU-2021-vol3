import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Comment from "./Comment";

type TextMessageObject = {
  id: string;
  text: string;
};

const CommentaryArea = () => {
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [comments, setComments] = useState<TextMessageObject[]>([]);

  const getLiveChatId = () => {
    const target = "https://www.youtube.com/embed/4N7HKC7szFA";
  };

  const getComment = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/liveChat/messages", {
        params: {
          key: "AIzaSyAWufHsGJN1P2jPmGpTL2WJZbC2Go91140",
          part: "snippet",
          liveChatId:
            "Cg0KC0hwZE81S3EzbzdZKicKGFVDR0NaQVlxNVh4b2psX3RTWGNWSmhpURILSHBkTzVLcTNvN1k",
          pageToken: nextPageToken,
        },
      })
      .then((res) => {
        console.log(
          res["data"]["items"][0]["snippet"]["textMessageDetails"][
            "messageText"
          ]
        );

        const textMessageObjectArray: TextMessageObject[] = [];
        for (let index = 0; index < res["data"]["items"].length; index++) {
          const element =
            res["data"]["items"][index]["snippet"]["textMessageDetails"][
              "messageText"
            ];

          const id = res["data"]["items"][index]["id"];
          textMessageObjectArray.push({ id: id, text: element });
        }

        console.log(textMessageObjectArray);
        setComments([...textMessageObjectArray]);

        setNextPageToken(res["data"]["nextPageToken"]);
      });
  };

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

          {comments.map((comment) => {
            return <Comment comment={comment.text} key={comment.id} />;
          })}
        </div>
        <div className="mx-8 mt-8">
          <button className="bg-slate-500" onClick={getComment}>
            押してね
          </button>
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
