import Head from "next/head";

// import component to show in the page
import Navbar from "@/components/navbar";
import Mide from "@/components/mide";
import Comp from "@/components/comp";
import Project from "@/components/project";

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
