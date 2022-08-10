import React from "react";

const Card2 = ({ card }) => {
  console.log(card);
  console.log(card?.title);
  return (
    <div className="relative h-[148px] w-[201px] overflow-hidden rounded-2xl bg-[#111111]">
      <div
        className="absolute left-[-58px] top-[-69px] h-[174px] w-[174px] blur-[50px]"
        style={{ background: card?.gradient }}
      />
      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-between p-2">
        <div className="flex">
          <div className="h-[52px] w-[52px]">
            <img src={card?.img} alt="r1" />{" "}
          </div>
          <div className="ml-3 flex h-[56px] w-[85px] flex-col justify-between">
            <div className="text-sm font-medium leading-5 text-[#fafafa] text-ellipsis whitespace-nowrap overflow-hidden">
              {card?.title}
            </div>
            <div
              className="py-1 px-2 text-xs font-normal leading-5 "
              style={{ color: card?.color }}
            >
              {card?.subtitle}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-medium leading-5 text-[#A2A2A2]">
              {card?.ens}
            </div>
            <div className="flex text-[12px] font-medium leading-5 text-[#fff]">
              {card?.value} <img src="/images/eth.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[12px] font-normal leading-5 text-[#A2A2A2]">
              {card?.time}
            </div>
            <div className="text-[12px] font-normal leading-5 text-[#19ED7B]">
              {card?.xp}XP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
