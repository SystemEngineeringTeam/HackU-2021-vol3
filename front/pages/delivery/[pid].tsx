import ReactMarkdown from "react-markdown";
import DeliveryScreen from "../../components/Delivery/DeliveryScreen";
import Document from "../../components/Delivery/Document";
import Layout from "../../components/Layout";

const Delivary = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="w-3/5 bg-slate-300">
          <DeliveryScreen />
        </div>
        <Document />
      </div>
    </Layout>
  );
};
export default Delivary;
