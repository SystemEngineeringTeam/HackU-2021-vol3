import React, { useContext, useEffect, useRef } from "react";
import { axiosInstance as axios } from "../utils/api";
import { AuthContext } from "./Auth";

const RegsiterUser = () => {
  const [showModal, setShowModal] = React.useState(true);
  const inputUserName = useRef<HTMLInputElement>(null);
  const { currentUser, currentIdToken } = useContext(AuthContext);

  const submitUserName = () => {
    if (currentUser !== null) {
      axios.interceptors.request.use((request) => {
        if (currentIdToken && request.headers != null) {
          request.headers = { Authorization: `Bearer ${currentIdToken}` };
        }
        return request;
      });

      axios
        .post("/user", {
          name: inputUserName.current?.value,
          profileImageURL: currentUser?.photoURL,
        })
        .then((res) => {
          console.log("yes");
          console.log(res);
        })
        .catch((err) => {
          console.log("no");
          console.log(err);
        });
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="flex flex-col justify-center items-center w-[700px] h-60 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                <div className="flex">
                  <div>
                    <input
                      type="text"
                      className="w-[600px] h-16 text-2xl text-center rounded-lg border border-black focus:outline-none focus:placeholder:opacity-0 "
                      placeholder="UserName"
                      ref={inputUserName}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    className="py-2 px-16 text-white bg-original-black rounded-md "
                    onClick={() => {
                      // setShowModal(false);
                      submitUserName();
                    }}
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
