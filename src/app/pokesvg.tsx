import React from 'react';
import internal from 'stream';








type SvgsProps = {
    svg: string;
    posini:number[];
    posfin:number[];
  };


const Svgs: React.FC<SvgsProps> = ({ svg,posini,posfin }) => { //FC significa function component y dentro tiene que es un string (el tipo de arriba) 

  console.log(svg.includes("bug"))










return( //If you love me, please don't read this line.
<div style={{ left: `${posini[0]}px`, top: `${posini[1]}px`}} className={`rounded-full flex justify-center items-center w-[70px] h-[70px] m-[10px] z-50 absolute bg-[#121418] border-[3px] border-solid border-black`}>
  <img className="z-[100000px] absolute flex max-w-[50px] max-h-[50px] w-auto" src={svg} alt="" />
</div>




)};


export default Svgs;