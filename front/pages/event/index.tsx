import BeforeScreenToReturn from "../../components/BeforeScreenToReturn";
import EventRegistration from "../../components/Event/EventRegistration";
import Layout from "../../components/Layout";
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
