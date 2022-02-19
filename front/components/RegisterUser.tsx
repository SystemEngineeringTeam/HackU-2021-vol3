import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

const RegsiterUser = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="flex flex-col justify-center items-center w-[700px] h-60 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                <div className="flex  ">
                  <div>
                    <input
                      type="text"
                      className="w-[600px] h-20 text-2xl text-center rounded-lg border border-black focus:outline-none focus:placeholder:opacity-0 "
                      placeholder="UserName"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    className="py-2 px-16 text-white bg-original-black rounded-md "
                    onClick={() => setShowModal(false)}
                  >
                    登録
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

export default RegsiterUser;
