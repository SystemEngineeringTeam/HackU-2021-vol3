import { render } from "@headlessui/react/dist/utils/render";
import { getAuth, signOut, getIdToken } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import { useContext, useEffect, useRef, useState } from "react";

import { axiosInstance as axios } from "../../utils/api";
import { AuthContext } from "../Auth";
import RegsiterUser from "../RegisterUser";
import Login from "./Login";
import ProfilePopOver from "./ProfilePopOver";

const Header = () => {
  const { currentUser, currentIdToken } = useContext(AuthContext);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  useEffect(() => {
    //新規ユーザか判定するAPIを叩く
    //新規ユーザならisNewUserをtrueにする
    axios.interceptors.request.use((request) => {
      if (currentIdToken && request.headers != null) {
        request.headers = { Authorization: `Bearer ${currentIdToken}` };
      }
      return request;
    });

    if (currentIdToken) {
      axios
        .get("/user")
        .then((res) => {
          //成功したのでuserは存在する
        })
        .catch((err) => {
          //失敗したのでuserは存在しない
          setIsNewUser(true);
        });
    }
    // eslint-disable-next-line
  }, [currentIdToken]);

  const profile = (
    <div className="flex ml-2">
      <div className="mt-5 mr-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z" /></svg>
      </div>
      <div className="mt-4 mr-4">
        <ProfilePopOver
          profileImg={
            currentUser?.photoURL ? currentUser.photoURL : "/white.png"
          }
        />
      </div>
    </div>
  );

  return (
    <div>
      <header className="flex justify-between h-16 bg-original-green">
        <div className="mt-4 ml-5">
          <Link href="/">
            <a
              className="inline-flex gap-2.5 items-center text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <Image
                src="/study.png"
                alt="Landscape picture"
                width="30px"
                height="30px"
              />
              <div className="text-white ">Benkyo</div>
            </a>
          </Link>
        </div>
        <nav className="hidden lg:flex">
          <div className="flex bg-original-red">
            <div className="border" />
            <Link href="/">
              <a className="mx-4 mt-3 text-lg font-semibold text-gray-600 transition duration-100">
                <Image src="/home.png" alt="" width="35px" height="35px" />
              </a>
            </Link>
            <div className="border" />
          </div>
          <div className="flex">
            <Link href="/calendar">
              <a className="mx-4 mt-3 text-lg font-semibold text-gray-600 transition duration-100">
                <Image src="/calendar.png" alt="" width="35px" height="35px" />
              </a>
            </Link>
            <div className="border" />
          </div>
          <div className="flex">
            <Link href="/mail">
              <a className="mx-4 mt-3 text-lg font-semibold text-gray-600 transition duration-100">
                <Image src="/mail.png" alt="" width="40px" height="40px" />
              </a>
            </Link>
            <div className="border" />
          </div>
        </nav>
        {/* <div className="hidden gap-2.5 -ml-8 sm:flex-row sm:justify-center lg:flex lg:justify-start" /> */}
        <div className="flex justify-between">
          <div>
            <button className="py-2 px-6 mt-3 mr-4 text-lg font-bold text-white hover:bg-gray-600 rounded-md bg-original-deep-gray">
              Add
            </button>
          </div>
          {currentUser ? (
            <div>{profile}</div>
          ) : (
            <div className="mt-3">
              <Login />
            </div>
          )}
        </div>
        {isNewUser ? <RegsiterUser /> : null}

        <button
          type="button"
          className="inline-flex gap-2 items-center py-2 px-2.5 text-sm font-semibold text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg focus-visible:ring ring-indigo-300 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    </div>
  );
};

export default Header;
