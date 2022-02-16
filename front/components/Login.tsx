import Image from "next/image";
import React from "react";

const Login = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="py-2 px-6 font-bold text-black bg-white hover:bg-gray-300 rounded-md "
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="text-base">Login</div>
      </button>
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="flex relative flex-col w-96 h-96 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                <div className="flex items-start mt-2 ml-2">
                  <button
                    className=""
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src="/batu.png" alt="" width="20px" height="20px" />
                  </button>
                </div>
                <div className="flex justify-center mx-auto mb-2 rounded-t border-b border-blue-50 border-solid ">
                  <h3 className="text-4xl font-semibold">📚 Benkyo</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none opacity-5"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none opacity-5"></span>
                  </button>
                </div>
                <div className="flex relative py-3 px-10 my-4 mx-auto bg-original-login-blue rounded-2xl drop-shadow-lg">
                  <div className="flex-initial mr-2">
                    <Image
                      src="/google.png"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <div className="flex-initial">
                    <button>Googleでログイン</button>
                  </div>
                </div>
                <div className="flex relative py-3 px-10 mx-auto mb-4 bg-original-login-blue rounded-2xl drop-shadow-lg">
                  <div className="flex-initial mt-1 mr-2">
                    <Image
                      src="/twitter.png"
                      alt=""
                      width="25px"
                      height="20px"
                    />
                  </div>
                  <div className="flex-initial">
                    <button>Twitterでログイン</button>
                  </div>
                </div>

                <div className="flex relative py-3 px-10 mx-auto bg-original-login-blue rounded-2xl drop-shadow-lg">
                  <div className="flex-initial mr-2">
                    <Image
                      src="/github.png"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <div className="flex-initial">
                    <button>Githubでログイン</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
