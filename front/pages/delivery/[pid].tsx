import ReactMarkdown from "react-markdown";
import CommentaryArea from "../../components/Delivery/CommentaryArea";
import DeliveryScreen from "../../components/Delivery/DeliveryScreen";
import Document from "../../components/Delivery/Document";
import Layout from "../../components/Layout";

const Delivary = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-3/5 ">
          <DeliveryScreen />
          {/* <CommentaryArea /> */}
          <div className="flex">
            <iframe
              width="1200"
              height="350"
              frameBorder="0"
              src="https://www.youtube.com/live_chat?v=HpdO5Kq3o7Y&embed_domain=localhost"
              allowFullScreen
            />
          </div>
        </div>
        <div />
        <div className="border-4 border-blue-400" />
        <Document />
      </div>
    </Layout>
  );
};
export default Delivary;
