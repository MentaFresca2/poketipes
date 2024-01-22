'use client'
import React, { useState, useEffect } from 'react';

type SvgsProps = {
  svg: string;
  posini: number[];
  cuantos:number;
  onPulsado: (newPulsado:boolean) => void;
  ids:string;
  onClick:(ids:string, newPulsado:boolean)=> void;
};

const Svgs: React.FC<SvgsProps> = ({ svg, posini, cuantos, ids, onPulsado,onClick}) => {
  
  const pos1:number[] = [255,805];
  const pos2:number[] = [355,805];

  const [pulsado, setpulsado] = useState<boolean>(false);
  const [posini2, setposini2] = useState<number[]>([130, 330]);
  const clicked = (event:any)=>{

    var id:string = event.currentTarget.id;
    
    
    if(pulsado){
     
    setpulsado(false);
    
    onPulsado(false);

   
    }if(!pulsado && cuantos < 2){
     
    onPulsado(true);
    setpulsado(true);
    
    }
    onClick(ids,pulsado)
  }







  useEffect(() => {
    const element = document.getElementById(ids);
    if (!pulsado) {
      setposini2(posini);
      if (element) {
        element.style.filter = "brightness(0.3)";
      }
    }else{
      
      const element = document.getElementById(ids);
      if (element ) {
        element.style.filter = "brightness(1)";
      }
    };
  }, [pulsado, posini]);

  return (
    <div
      data-active={pulsado}
      id={ids}
      onClick={clicked}
      style={{ left: `${posini2[0]}px`, top: `${posini2[1]}px`,filter:"brightness(0.3)" }}
      className={`rounded-full flex justify-center items-center w-[70px] h-[70px] m-[10px] z-50 absolute bg-[#121418] border-[3px] border-solid border-black select-none`}
    >
      <img className="z-[100000px] absolute flex max-w-[50px] max-h-[50px] w-auto select-none" src={svg} alt="" />
    </div>
  );
};

export default Svgs;
