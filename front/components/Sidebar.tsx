import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Category from "./Category";

const tagImage = [
  {
    id: 1,
    src: "front.png",
    name: "FRONTEND",
  },
  {
    id: 2,
    src: "backend.png",
    name: "BACKEND",
  },
  {
    id: 3,
    src: "infra.png",
    name: "INFRA",
  },
  {
    id: 4,
    src: "network.png",
    name: "NETWORK",
  },
  {
    id: 5,
    src: "security.png",
    name: "SECURITY",
  },
  {
    id: 6,
    src: "mobile.png",
    name: "MOBILE",
  },
  {
    id: 7,
    src: "design.png",
    name: "DESIGN",
  },
  {
    id: 8,
    src: "cloud.png",
    name: "CLOUD",
  },
  {
    id: 9,
    src: "hardware.png",
    name: "HARDWARE",
  },
  {
    id: 10,
    src: "devops.png",
    name: "DEVOPS",
  },
];

const target = [
  {
    id: 1,
    name: "STUDENT",
    src: "student.png",
  },
  {
    id: 2,
    name: "BEGINNER",
    src: "beginner.png",
  },
  {
    id: 3,
    name: "WOMAN",
    src: "woman.png",
  },
];

const Sidebar = () => {
  const log = () => {
    console.log("hello");
  };

  return (
    <div className="px-4 pt-8 w-full">
      <div className="p-2 mx-auto w-full max-w-md bg-white rounded-2xl">
        <div className="mb-6">
          <div className="font-bold">KEYWORD SEARCH</div>
          <div className="relative">
            <input
              type="text"
              className="p-2 w-full bg-original-white rounded-lg shadow-inner"
            />
            <button className="absolute top-1 right-2">
              <svg
                className="w-8 h-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="10" cy="10" r="7" />{" "}
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between py-2 px-4 w-full text-sm font-medium text-left bg-original-black focus:outline-none focus-visible:ring hover:opacity-90">
                <span className="text-white">CATEGORYS</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              {tagImage.map((tag) => (
                <Category key={tag.id} src={tag.src} name={tag.name} />
              ))}
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2" defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between py-2 px-4 w-full text-sm font-medium text-left bg-original-black focus:outline-none hover:opacity-90">
                <span className="text-white">TARGET</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              {target.map((tag) => (
                <Category key={tag.id} src={tag.src} name={tag.name} />
              ))}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Sidebar;
