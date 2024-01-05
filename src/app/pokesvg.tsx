import React from 'react';
import internal from 'stream';








type SvgsProps = {
    svg: string;
    posini:number;
    posfin:number;
  };


const Svgs: React.FC<SvgsProps> = ({ svg,posini,posfin }) => { //FC significa react component y dentro tiene que es un string (el tipo de arriba) 

  console.log(svg.includes("bug"))

  var positionx:number = 0;
  var positiony:number = 0;

if (svg.includes("bug")){
  
positionx = 10;
positiony = 20;


}else{
  positionx = 0
  
  
  
}








return( //If you love me, please don't read this line.
<div className={`rounded-full flex justify-center items-center w-[80px] h-[80px] m-[10px] z-50 absolute bg-[#121418] border-[3px] border-solid border-black

`}>
  <img className="z-[100000px] absolute flex max-w-[60px] max-h-[60px] w-auto" src={svg} alt="" />
</div>




)};


export default Svgs;