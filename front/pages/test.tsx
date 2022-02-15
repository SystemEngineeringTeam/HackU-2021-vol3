import SelectSort from "../components/SelectSort";
import Sidebar from "../components/Sidebar";

const test = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <SelectSort></SelectSort>
      <div>{`REACT_APP_APIKEY:${process.env.REACT_APP_APIKEY}`}</div>
      <div>{`REACT_APP_AUTHDOMAIN:${process.env.REACT_APP_AUTHDOMAIN}`}</div>
      <div>{`REACT_APP_DATABASEURL:${process.env.REACT_APP_DATABASEURL}`}</div>
      <div>{`REACT_APP_PROJECT_ID:${process.env.REACT_APP_PROJECT_ID}`}</div>
      <div>{`REACT_APP_STORAGE_BUCKET:${process.env.REACT_APP_STORAGE_BUCKET}`}</div>
      <div>{`REACT_APP_MESSAGING_SENDER_ID:${process.env.REACT_APP_MESSAGING_SENDER_ID}`}</div>
      <div>{`REACT_APP_APP_ID:${process.env.REACT_APP_APP_ID}`}</div>
      <div>{`REACT_APP_MEASUREMENT_ID:${process.env.REACT_APP_MEASUREMENT_ID}`}</div>
    </div>
  );
};
export default test;
