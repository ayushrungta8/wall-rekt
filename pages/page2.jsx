import Head from "next/head";
import Card2 from "../components/Card2";

const page2 = () => {
  const cards = [
    {
      title: "ENS Linked",
      subtitle: "ENS Linked",
      ens: "dingaling.eth",
      time: "2 months ago",
      value: "1.82",
      xp: "+200",
      img: "/images/c2/c2i1.svg",
      color: "#4BDFFF",
      gradient: "#25b5d51a",
    },
    {
      title: "Best Flip",
      subtitle: "Sold",
      ens: "CryptoPunk #2131",
      time: "10 days ago",
      value: "9.82",
      xp: "+200",
      img: "/images/c2/c2i2.svg",
      color: "#FFC148",
      gradient: "#f8a9101a",
    },
    {
      title: "Should have sold",
      subtitle: "Mint",
      ens: "Rare Apepe #6974",
      time: "10 days ago",
      value: "98.5",
      xp: "+200",
      img: "/images/c2/c2i3.svg",
      color: "#44FFC8",
      gradient: "#0bf1ad1a",
    },
    {
      title: "First NFT bought",
      subtitle: "Bought",
      ens: "BAYC #7925",
      time: "10 days ago",
      value: "1.82",
      xp: "+10",
      img: "/images/c2/c2i4.svg",
      color: "#4BDFFF",
      gradient: "#25b5d51a",
    },
    {
      title: "Paper Handed",
      subtitle: "Sold",
      ens: "RMoonbird #7866",
      time: "10 days ago",
      value: "98.5",
      xp: "+200",
      img: "/images/c2/c2i5.svg",
      color: "#44FFC8",
      gradient: "#0bf1ad1a",
    },
  ];
  return (
    <>
      <Head>
        <title>Wall-Rekt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen min-h-screen bg-[#1b1b1b] gap-4 flex flex-wrap justify-center items-center">
        {cards.map((card, i) => {
          return <Card2 card={card} key={i} />;
        })}
      </div>
    </>
  );
};

export default page2;
