import Image from "next/image";

const comment = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src="/mikan.png" height="50" width="50px" alt="mikan" />
      </div>
      <div className="ml-2">mikan_54951</div>
      <div className="ml-2">面白そう</div>
    </div>
  );
};

export default comment;
