import Header from "../../components/Header";
import BeforeScreenToReturn from "../../components/BeforeScreenToReturn";
import EventRegistration from "../../components/EventRegistration";
const event = () => {
  return (
    <>
      <Header />
      <div className="absolute top-28 left-20">
        <BeforeScreenToReturn />
      </div>
      <EventRegistration />
    </>
  );
};

export default event;
