import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../components/Auth";
import LoginDetail from "../components/LoginDetail";
import { axiosInstance as axios } from "../utils/api";
import { firebaseApp } from "../utils/firebase";

const testLogin = () => {
  const loginGoogle = () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    axios.post("/auth");
  };

  return (
    <>
      <LoginDetail />
    </>
  );
};

export default testLogin;
