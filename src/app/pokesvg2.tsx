'use client'
import React from 'react';

type SvgsProps2 = {
  svg: string;
  ids:string;
  
};

const Svgs2: React.FC<SvgsProps2> = ({ svg, ids}) => {


  return (
    <div
      
      id={ids}
      
      style={{display:'none'}}
      className={`rounded-full flex justify-center items-center w-[70px] h-[70px] m-[10px] z-50 bg-[#121418] border-[3px] border-solid border-black select-none`}
    >
      <img className="z-[100000px] absolute flex max-w-[50px] max-h-[50px] w-auto select-none" src={svg} alt="" />
    </div>
  );
};

export default Svgs2;
