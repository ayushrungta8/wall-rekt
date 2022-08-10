import Head from "next/head";
import React from "react";
import Card1 from "../components/Card1";

const page1 = () => {
  return (
    <>
      <Head>
        <title>Wall-Rekt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen bg-[#1b1b1b] flex justify-center items-center">
        <Card1 />
      </div>
    </>
  );
};

export default page1;
