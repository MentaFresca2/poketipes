'use client'
import React, { useState, useEffect } from 'react';

type SvgsProps = {
  svg: string;
  cuantos:number;
  onPulsado: (newPulsado:boolean) => void;
  ids:string;
  onClick:(ids:string, newPulsado:boolean)=> void;
};

const Svgs: React.FC<SvgsProps> = ({ svg, cuantos, ids, onPulsado,onClick}) => {
  
 

  const [pulsado, setpulsado] = useState<boolean>(false);
 
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
      
      if (element) {
        element.style.filter = "brightness(0.3)";
      }
    }else{
      
      
      if (element ) {
        element.style.filter = "brightness(1)";
      }
    };
  }, [pulsado]);

  return (
    <div
      data-active={pulsado}
      id={ids}
      onClick={clicked}
      style={{filter:"brightness(0.3)" }}
      className={`rounded-full flex justify-center items-center w-[70px] h-[70px] m-[10px] z-50 bg-[#121418] border-[3px] border-solid border-black select-none animacionbrillo cursor-pointer`}
    >
      <img className="z-[100000px] absolute flex max-w-[50px] max-h-[50px] w-auto select-none" src={svg} alt="" />
    </div>
  );
};

export default Svgs;
