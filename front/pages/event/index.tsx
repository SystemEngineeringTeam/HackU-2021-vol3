import Layout from "../../components/Layout";
import BeforeScreenToReturn from "../../components/BeforeScreenToReturn";
import EventRegistration from "../../components/EventRegistration";
const event = () => {
  return (
    <>
      <Layout>
        <div className="absolute top-28 left-20">
          <BeforeScreenToReturn />
        </div>
        <EventRegistration />
      </Layout>
    </>
  );
};

export default event;
