import Header from "../../components/Header";
import Before_screen_to_return from "../../components/before_screen_to_return";
import Event_registration from "../../components/event_registration";
const event = () => {
  return (
    <>
      <Header />
      <div className="absolute top-28 left-20">
        <Before_screen_to_return />
      </div>
      <Event_registration />
    </>
  );
};

export default event;
