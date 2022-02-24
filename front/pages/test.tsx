import { log, time } from "console";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Auth";
import Layout from "../components/Layout";
import Notify from "../components/Notify";

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

    // const now = moment("2019-06-18 10:01:34");
    // console.log(now);

    axios
      .post("/event", {
        title: "vscode",
        description:
          "主要な英語の辞書の中で最も長い単語は、 ニューモノウルトラマイクロスコピックシリコボルカノコニオーシスです。 これは、非常に細かいシリカ粒子、特に火山からの吸入によって発症した肺疾患を指す単語です。医学的には、珪肺症と同じです",
        document: "vscode",
        imageID: 3,
        datetime: moment().format("2006-01-02T15:04:05+09:00"),
        tags: [1, 2, 3],
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
          <Notify />
        </div>
      </Layout>
    </>
  );
};

export default App;
