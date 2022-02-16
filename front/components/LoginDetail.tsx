import { getAuth, signInWithRedirect } from "firebase/auth";
import Router from "next/router";
import { FC, useEffect, useContext } from "react";
import firebase from "../utils/firebase";
import { AuthContext } from "./Auth";

const LoginDetail: FC = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(new firebase.auth.GoogleAuthProvider());

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    // firebase.auth().signInWithRedirect(provider);
  };
  return (
    <div className="container">
      <button onClick={login}>googleでログインする</button>
    </div>
  );
};

export default LoginDetail;
