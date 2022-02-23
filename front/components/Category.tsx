import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  name: string;
};

const Category = (props: Props) => {
  const [color, setColor] = useState({
    bg: "bg-white",
    text: "text-original-black",
  });

  const chnageColor = () => {
    if (color.bg === "bg-original-red") {
      setColor({ bg: "bg-white", text: "text-original-black" });
    } else {
      setColor({ bg: "bg-original-red", text: "text-white" });
    }
  };
  return (
    <button className={`w-full ${color.bg}`} onClick={chnageColor}>
      <Disclosure.Panel
        className={`flex justify-between px-4 pt-4 pb-2 text-sm font-bold  border border-black hover:opacity-80 ${color.text}`}
      >
        <div className="flex">
          <div className="mt-1 mr-6">
            <Image
              src={`/tagImage/${props.src}`}
              alt=""
              width="27px"
              height="27px"
            />
          </div>
          <div className="text-xl">{props.name}</div>
        </div>
        <div className="">
          <Image src="/plus.png" alt="" width="30px" height="30px" />
        </div>
      </Disclosure.Panel>
    </button>
  );
};

export default Category;
