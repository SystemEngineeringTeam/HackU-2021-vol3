import {
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
} from "firebase/auth";
import Router from "next/router";
import { FC, useEffect, useContext } from "react";

import { firebaseApp } from "../utils/firebase";
import { AuthContext } from "./Auth";

const LoginDetail: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  const login = () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="container">
      <button onClick={login}>googleでログインする</button>
      <h1>{process.env.NEXT_PUBLIC_PROJECT_ID}</h1>
      <h1>{process.env.NEXT_PUBLIC_API_KEY}</h1>
    </div>
  );
};

export default LoginDetail;
