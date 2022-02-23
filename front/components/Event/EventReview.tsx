import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { axiosInstance as axios } from "../../utils/api";

type Props = {
  comment: string;
  commentedBy: string;
  profileImageURL: string;
  stars: number;
};

const EventReview = (props: Props) => {
  const { comment, commentedBy, profileImageURL, stars } = props;

  const starsElement = [];

  for (let i = 0; i < 5; i++) {
    starsElement.push(
      <FaStar
        key={i}
        style={{
          color: stars > i ? "#ffc107" : "#e4e5e9",
          fontSize: "1.5rem",
        }}
      />
    );
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex mt-12 ml-72 h-12 ">
          <div className="flex ">
            <Image
              src={`${profileImageURL}`}
              height="50px"
              width="45 px"
              alt="infra"
              className="rounded-full"
            />
          </div>
          <div className="flex-col ml-4 text-2xl">
            <div>{commentedBy}</div>
            <div className="flex">{starsElement}</div>
          </div>
        </div>
        <div className="mt-8 ml-[275px]">{comment}</div>
      </div>
    </div>
  );
};

export default EventReview;
