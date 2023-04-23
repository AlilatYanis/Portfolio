import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Mide from "@/components/mide";
import Comp from "@/components/comp";
import Project from "@/components/project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yanis Alilat - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Mide />
      <Comp />
      <Project />
    </>
  );
}
