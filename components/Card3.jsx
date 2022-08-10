import React from "react";

const Card3 = ({ card }) => {
  return (
    <div className=" flex h-[305px] w-[201px] flex-col justify-between overflow-hidden rounded-lg bg-[#111111] p-1">
      <div
        className="relative h-[193px] w-[193px] rounded-lg "
        style={{ backgroundImage: "url(" + card.img + ")" }}
      >
        <div className="absolute bottom-1 right-1 z-10 flex flex-col  justify-between rounded-[31px] bg-[#00000080] px-[6px] py-[4px] text-white backdrop-blur-sm">
          {card?.time}
        </div>
      </div>

      <div className="flex h-[76px] flex-col justify-between p-1">
        <div className="text-sm font-medium leading-5 text-[#fafafa]">
          {card?.ens}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-medium leading-5 text-[#A2A2A2]">
            Bought
          </div>
          <div className="flex text-[12px] font-medium leading-5 text-[#fff]">
            {card?.value} <img src="/images/eth.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[12px] font-medium leading-5 text-[#A2A2A2]">
            Floor
          </div>
          <div className="flex text-[12px] font-normal leading-5 text-[#19ED7B]">
            <span className="flex font-medium text-[#fff]">
              1.82 <img src="/images/eth.svg" alt="" />
            </span>
            +21.6%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
