import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Home from "../components/Home";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default Index;
