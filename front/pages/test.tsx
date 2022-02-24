import { log } from "console";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Auth";
import Layout from "../components/Layout";
import { axiosInstance as axios } from "../utils/api";

const App = () => {
  const [inputElement, setInputElement] = useState("");
  const [text, setText] = useState("");
  const { currentUser, currentIdToken } = useContext(AuthContext);

  const click = () => {
    axios.interceptors.request.use((request) => {
      if (currentIdToken && request.headers != null) {
        request.headers = { Authorization: `Bearer ${currentIdToken}` };
      }
      return request;
    });

    console.log(currentIdToken);

    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

    axios
      .post("/event", {
        title: "ss",
        description: "ss",
        document: "ss",
        imageID: 1,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
        tag: [1, 2],
        parcitipants: "1",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Layout>
        <div>
          <button onClick={click} className="border-2 border-black">
            post
          </button>
        </div>
      </Layout>
    </>
  );
};

export default App;
