import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { axiosInstance as axios } from "../../utils/api";
import { firebaseApp } from "../../utils/firebase";
import { AuthContext } from "../Auth";

type Props = {
  id: number;
};

const DeliveryURL = (props: Props) => {
  const id = props.id;

  const [showModal, setShowModal] = React.useState(false);
  const { currentUser, currentIdToken } = useContext(AuthContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const saveURL = () => {
    axios.interceptors.request.use((request) => {
      if (currentIdToken && request.headers != null) {
        request.headers = { Authorization: `Bearer ${currentIdToken}` };
      }
      return request;
    });

    if (currentIdToken) {
      console.log(inputRef.current?.value);
      axios
        .post(`/event/${id}`, { streamURL: inputRef.current?.value })

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="py-2 px-10 mr-2 text-white bg-blue-400 hover:bg-gray-300 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="text-xl">配信URLの設定</div>
      </button>
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="flex flex-col justify-center items-center w-[700px] h-80 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                <div className="flex justify-start mb-4 ml-4 w-[700px] ">
                  <button
                    className=""
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src="/batu.png" alt="" width="25px" height="25px" />
                  </button>
                </div>
                <div className="flex w-[700px] ">
                  <div className="mb-4 ml-14 text-5xl">設定</div>
                </div>
                <div className="flex">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-[600px] h-28 text-2xl text-center rounded-lg border border-black focus:outline-none focus:placeholder:opacity-0 "
                      placeholder="勉強会を配信するYoutubeのURLを入力しましょう"
                      value={inputRef.current?.value}
                      ref={inputRef}
                    />
                    <div className="flex absolute top-1 left-6 gap-2">
                      <div className="font-bold">配信URL</div>
                      <div className="text-red-500">(必須)</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    className="py-2 px-16 text-white bg-original-black rounded-md "
                    onClick={saveURL}
                  >
                    保存
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  );
};

export default DeliveryURL;
