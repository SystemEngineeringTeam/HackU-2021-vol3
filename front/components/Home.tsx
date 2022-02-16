import { getAuth, getIdToken, signOut } from "firebase/auth";
import Image from "next/image";
import { useContext } from "react";
import { firebaseApp } from "../utils/firebase";
import { AuthContext } from "./Auth";
import Event from "./Event";
import Header from "./Header";
import Layout from "./Layout";
import SelectSort from "./SelectSort";
import Sidebar from "./Sidebar";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const logOut = () => {
    const auth = getAuth(firebaseApp);

    signOut(auth).then(() => {
      console.log("success");
    });
  };

  if (currentUser != null) {
    getIdToken(currentUser, true).then((idToken) => {});
  }

  return (
    <Layout>
      <div className="flex">
        <div className="flex-col flex-1 my-6 ml-6 text-4xl font-bold">
          <div className="flex justify-between">
            <div> 直近開催イベント</div>
            <div>
              <button onClick={logOut}>ss</button>
              <SelectSort />
            </div>
          </div>
          <div className="my-4 border-4" />
          <div className="grid grid-cols-12 gap-4">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
        </div>
        <div className="border-4" />
        <div className="flex flex-col justify-start w-3/12 ">
          <div className=" ">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
