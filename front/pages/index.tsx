import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Home from "../components/Home";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default Index;
