import React, { FunctionComponent, SVGProps } from 'react';
import internal from 'stream';








type SvgsProps = {
    svg: string;
  };


const Svgs: React.FC<SvgsProps> = ({ svg }) => {



  var positionx:number = 0;
  var positiony:number = 0;

if (svg.includes("bug")){
  console.log("xddddddddd")
positionx = 1000;
positiony = 20;


}else{
  positionx = 0
  
  
  
}








return(
<div className={`rounded-full justify-center items-center w-[80px] h-[80px] m-[10px] right-[${positionx}px] z-[1000px] absolute bg-[#121418] border-[3px] border-solid border-black`}>
<img className="z-[100000px] absolute flex max-w-[60px] max-h-[60px] w-auto" src={svg} alt="" />










</div>
)};


export default Svgs;