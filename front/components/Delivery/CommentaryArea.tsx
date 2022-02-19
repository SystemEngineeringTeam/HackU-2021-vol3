import Image from "next/image";

const CommentaryArea = () => {
  return (
    <>
      <div>
        <div className="flex flex-col m-8 border border-black">
          <div className="flex items-center">
            <div>
              <Image src="/mikan.png" height="50" width="50px" alt="mikan" />
            </div>
            <div className="ml-2">mikan_54951</div>
            <div className="ml-2">面白そう</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentaryArea;
