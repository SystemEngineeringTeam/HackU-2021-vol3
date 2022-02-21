import Image from "next/image";
import { memo } from "react";

type Props = {
  comment: string;
};

const comment = (props: Props) => {
  return (
    <div className="flex items-center">
      <div>
        <Image src="/mikan.png" height="50" width="50px" alt="mikan" />
      </div>
      <div className="ml-2">mikan_54951</div>
      <div className="ml-2">{props.comment}</div>
    </div>
  );
};

export default comment;
