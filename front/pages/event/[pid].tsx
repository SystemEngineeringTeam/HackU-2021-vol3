import { async } from "@firebase/util";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EventDetail from "../../components/Event/EventDetail";
import NewEventDetail from "../../components/Event/NewEventDetail";
import Layout from "../../components/Layout";
import { axiosInstance as axios } from "../../utils/api";

const ViewEvent = () => {
  return (
    <Layout>
      <EventDetail />
    </Layout>
  );
};

export default ViewEvent;
