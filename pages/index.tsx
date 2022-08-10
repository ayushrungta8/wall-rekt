import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-[#1b1b1b] gap-2 flex flex-col justify-center items-center">
      <Head>
        <title>Wall-Rekt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white text-4xl font-bold mb-2">
        Wall-Rekt Assignment
      </div>
      <div className="flex gap-4 text-4xl">
        <a className="border rounded p-2 btn text-white" href="/page1">
          Card1
        </a>
        <a className="border rounded p-2 btn text-white" href="/page2">
          Card2
        </a>
        <a className="border rounded p-2 btn text-white" href="/page3">
          Card3
        </a>
      </div>
    </div>
  );
};

export default Home;
