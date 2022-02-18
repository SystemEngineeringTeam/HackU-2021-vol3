import { async } from "@firebase/util";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EventDetail from "../../components/EventDetail";
import Layout from "../../components/Layout";
import { axiosInstance as axios } from "../../utils/api";

const Post = () => {
  return (
    <Layout>
      <EventDetail />
    </Layout>
  );
};

export default Post;
