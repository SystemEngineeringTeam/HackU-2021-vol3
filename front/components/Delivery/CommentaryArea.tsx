import Image from "next/image";
import Comment from "./Comment";

const CommentaryArea = () => {
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
