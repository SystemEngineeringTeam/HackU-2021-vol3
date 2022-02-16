import {
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  getIdToken,
  signOut,
} from "firebase/auth";
import Router from "next/router";
import { FC, useEffect, useContext } from "react";

import { axiosInstance as axios } from "../utils/api";
import { firebaseApp } from "../utils/firebase";
import { AuthContext } from "./Auth";

const LoginDetail: FC = () => {
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   currentUser && Router.push("/");
  // }, [currentUser]);

  useEffect(() => {
    if (currentUser != null) {
      getIdToken(currentUser, true).then((idToken) => {
        axios.interceptors.request.use((request) => {
          if (idToken && request.headers != null) {
            request.headers.Authorization = `Bearer ${idToken}`;
          }

          return request;
        });
        axios.post("/auth");
        console.log(idToken);
      });
    }
  });

  const login = () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    const auth = getAuth(firebaseApp);

    signOut(auth).then(() => {
      console.log("logout");
    });
  };

  return (
    <div className="container flex flex-col w-52">
      <button onClick={login} className="rounded-2xl border border-black">
        googleでログインする
      </button>
      <button onClick={logOut} className="rounded-2xl border border-black">
        ログアウトする
      </button>
    </div>
  );
};

export default LoginDetail;
