import React from "react";

const Card1 = () => {
  return (
    <div className=" flex h-[640px] w-[292px] flex-col  overflow-hidden rounded-2xl bg-[#111111] p-4">
      <div className="mb-8 flex items-center">
        <div className="flex  flex-col items-center">
          <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-4 border-yellow-400 bg-[#f8a9101a]">
            <div className="h-[72px] w-[72px] overflow-hidden rounded-full border-4 border-[#111111]">
              <img
                src="/images/profile_pic.svg"
                alt="pp"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="m-auto mt-1 self-start rounded-[44px] bg-[#f8a9101a] px-2 text-center text-[12px] font-semibold text-[#FFC148]">
            LVL 2
          </div>
        </div>
        <div className="ml-4  flex flex-col">
          <div className="text-[19px] font-medium text-white">
            dingaling.eth
          </div>
          <div className="text-[12px] text-[#A2A2A2]  ">0xadgf....jkld</div>
        </div>
      </div>
      <div className="mb-8 flex">
        <div className="flex rounded-3xl bg-[#1A1A1A] py-1 px-2 text-[12px] font-normal text-[#A2A2A2]">
          <img src="/images/twitter.svg" alt="" className="mr-2" />
          @dingalingts
        </div>
        <div className="ml-4 flex h-[32px] w-[32px] rounded-full bg-[#1A1A1A] p-1 text-[#A2A2A2]">
          <img src="/images/globe.svg" alt="globe" />
        </div>
      </div>
      <div className="mb-8 flex pr-8 text-[14px] text-[#A2A2A2]">
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </div>
      <div className="mb-8 flex flex-col pr-8 text-[12px] text-[#A2A2A2]">
        Common communties (3)
        <div className="mt-2 flex gap-2">
          <img src="/images/c1/c1i1.svg" alt="" />
          <img src="/images/c1/c1i2.svg" alt="" />
          <img src="/images/c1/c1i3.svg" alt="" />
          <img src="/images/c1/c1i4.svg" alt="" />
        </div>
      </div>
      <div className="mb-8 flex flex-wrap gap-2 pr-8 text-[12px]">
        <div className="cursor-pointer rounded-[10000px] border border-[#FFC148] px-2 text-[#FFC148]">
          Art 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#FFC148] px-2 text-[#FFC148]">
          Utility 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#1A1A1A] px-2 text-[#A2A2A2]">
          PFP 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#1A1A1A] px-2 text-[#A2A2A2]">
          Metaverse 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#1A1A1A] px-2 text-[#A2A2A2]">
          Gaming 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#1A1A1A] px-2 text-[#A2A2A2]">
          PFP 12%
        </div>
        <div className="cursor-pointer rounded-[10000px] border border-[#1A1A1A] px-2 text-[#A2A2A2]">
          ens 12%
        </div>
      </div>
      <button className="mb-8 flex cursor-pointer flex-wrap items-center justify-center gap-2 rounded-[10000px] border border-[#A2A2A2] py-[12px] text-center text-[14px] text-[12px] text-white">
        Subscribe
        <img src="/images/chevron.svg" alt="" />
      </button>
      {/* <div className='flex h-[76px] flex-col justify-between p-1'>
        <div className='text-sm font-medium leading-5 text-[#fafafa]'>
          Azuki #9839
        </div>
        <div className='flex items-center justify-between'>
          <div className='text-[12px] font-medium leading-5 text-[#A2A2A2]'>
            Bought
          </div>
          <div className='flex text-[12px] font-medium leading-5 text-[#fff]'>
            1.82 <img src='/images/eth.svg' alt='' />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='text-[12px] font-medium leading-5 text-[#A2A2A2]'>
            Floor
          </div>
          <div className='flex text-[12px] font-normal leading-5 text-[#19ED7B]'>
            <span className='flex font-medium text-[#fff]'>
              1.82 <img src='/images/eth.svg' alt='' />
            </span>
            +21.6%
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card1;
