import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { getAuth, getIdToken, signOut } from "firebase/auth";
import Image from "next/image";
import { Fragment } from "react";
import { firebaseApp } from "../utils/firebase";

const solutions = [
  {
    name: "管理画面",
    description: "Measure actions your users take",
    href: "/admin",
    img: "/admin.png",
    method: "",
  },
  {
    name: "名前の変更",
    description: "Create your own targeted content",
    href: "/test",
    img: "/nameChange.png",
    method: "",
  },
  {
    name: "ログアウト",
    description: "Keep track of your growth",
    href: "/",
    img: "/logout.png",
  },
];

type Props = {
  profileImg: string;
};

const ProfilePopOver = (props: Props) => {
  const logOut = () => {
    const auth = getAuth(firebaseApp);

    signOut(auth).then(() => {
      console.log("logout");
    });
  };

  return (
    <div className="top-16 left-60 px-4 w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-white group inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 rounded-full w-8 h-8 
                `}
            >
              <button
                className={`${open ? "" : "text-opacity-70"}
                  h-10 w-10  group-hover:text-opacity-80 transition ease-in-out duration-150`}
              >
                <div>
                  <Image
                    src={props.profileImg}
                    alt=""
                    width="50px"
                    height="50px"
                    className="rounded-full"
                  />
                </div>
              </button>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 px-4 mt-3 w-44 max-w-sm -translate-x-1/2 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden mr-2 rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                  <div className="grid relative gap-2 pl-4 bg-white lg:grid-cols-1">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 hover:bg-gray-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 transition duration-150 ease-in-out"
                      >
                        <div className="flex shrink-0 justify-center items-center w-10 h-10 text-white sm:w-12 sm:h-12">
                          <Image
                            src={item.img}
                            alt=""
                            width="30px"
                            height="30px"
                          />
                        </div>
                        <div className="ml-2">
                          <button onClick={logOut}>
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </button>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default ProfilePopOver;
