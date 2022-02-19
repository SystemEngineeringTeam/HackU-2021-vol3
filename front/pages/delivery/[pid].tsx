import ReactMarkdown from "react-markdown";
import CommentaryArea from "../../components/Delivery/CommentaryArea";

import DeliveryScreen from "../../components/Delivery/DeliveryScreen";
import Document from "../../components/Delivery/Document";
import Layout from "../../components/Layout";

const Delivary = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-3/5 bg-slate-300">
          <DeliveryScreen />
          <CommentaryArea />
        </div>
        <Document />
      </div>
    </Layout>
  );
};
export default Delivary;
