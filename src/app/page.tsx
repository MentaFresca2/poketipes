'use client'
  import React, { useState, useEffect } from 'react';
  import Svgs from "./pokesvg"
  import Svgs2 from "./pokesvg2"
  import poketipes from "./poketipes.json"
  import "./globals.css"

  type TypeChart = {
    [attackerType: string]: {
      [defenderType: string]: number;
    };
  };
  
  function getTypesWeakerThanOne(typeChart: TypeChart, actual: string, resiste:boolean, borrar:boolean): string[] {
    const weakerTypes: string[] = [];
    if(!borrar){
    if(resiste){
    for (const attackerType in typeChart) {
      const defenderTypes = typeChart[attackerType];
  
      
      if (attackerType === actual) {
        for (const defenderType in defenderTypes) {
          if (defenderTypes[defenderType] > 1) {
            weakerTypes.push(defenderType);
          }
        }
      }
    }
  
    return Array.from(new Set(weakerTypes));
  }else{
    for (const attackerType in typeChart) {
      const defenderTypes = typeChart[attackerType];
  
      
      if (attackerType === actual) {
        for (const defenderType in defenderTypes) {
          if (defenderTypes[defenderType] < 1) {
            weakerTypes.push(defenderType);
          }
        }
      }
    }
  
    return Array.from(new Set(weakerTypes));

  }}else{

    for (const attackerType in typeChart) {
      const defenderTypes = typeChart[attackerType];
  
      
      if (attackerType === actual) {
        for (const defenderType in defenderTypes) {
          if (defenderTypes[defenderType] < 1 || defenderTypes[defenderType] > 1 || defenderTypes[defenderType] == 1) {
            weakerTypes.push(defenderType);
          }
        }
      }
    }
  
    return Array.from(new Set(weakerTypes));




  }}
  
  export default function Home(){
    const [mostrado, setmostrado] = useState<boolean>(true)
    
    const [cuantos, setCuantos] = useState<number>(0);
    //cuantos tipos activos hay:
    const sitio = (newPulsado: boolean) => { 
      setCuantos((prevCuantos: number) => (newPulsado ? prevCuantos + 1 : prevCuantos - 1));
      

    }
const borrar = true;
const noborrar = false;

  const [resiste, setResiste] = useState<boolean>(true)

  const [listaElemento, setListaElemento] = useState<Record<string,string | null>>({})

  const [elemento, setElemento] = useState<HTMLElement | null>(null);


  const clicked = (ids:string, pulsado:boolean)=>{
    if(cuantos < 2 && !pulsado){

    const elementoActual = document.getElementById(ids);
    setElemento(elementoActual)
    setListaElemento((prevlistaElemento) => ({
      ...prevlistaElemento,
      [ids]: ids
    }));
   
    }
    if(pulsado){
      setListaElemento((prevlistaElemento) => ({
        ...prevlistaElemento,
        [ids]: null
      }));
    }
  } 
 
  const ventanaid = "ventanaDos";
  useEffect(() => {





/*


    const ventana = document.getElementById(ventanaid);
    const flying2 = document.getElementById("flying2");
    const bug2 = document.getElementById("bug2");
    const dark2 = document.getElementById("dark2");
    const dragon2 = document.getElementById("dragon2");
    const electric2 = document.getElementById("electric2");
    const fairy2 = document.getElementById("fairy2");
    const fighting2 = document.getElementById("fighting2");
    const fire2 = document.getElementById("fire2");
    const ghost2 = document.getElementById("ghost2");
    const grass2 = document.getElementById("grass2");
    const ground2 = document.getElementById("ground2");
    const ice2 = document.getElementById("ice2");
    const normal2 = document.getElementById("normal2");
    const poison2 = document.getElementById("poison2");
    const psychic2 = document.getElementById("psychic2");
    const rock2 = document.getElementById("rock2");
    const steel2 = document.getElementById("steel2");
    const water2 = document.getElementById("water2");
 */
    

    var json:TypeChart = poketipes;
    console.log(listaElemento)
    for (var elements in listaElemento) {
    
      if(listaElemento[elements] == null){
          
      const mostrar = getTypesWeakerThanOne(json, elements,resiste,borrar)
        
          
      for (var x in mostrar){
        
        var actual = document.getElementById((mostrar[x]) + "2");
        if(actual){
            actual.style.display = "none"; 
          }
        }
      }
    }
  
  
    
  
  
  
  
  for (var elements in listaElemento) {
    if(listaElemento[elements] != null){
        
    const mostrar = getTypesWeakerThanOne(json, elements, resiste,noborrar)
      
        
    for (var x in mostrar){
      
      var actual = document.getElementById((mostrar[x]) + "2");
      if(actual){
          actual.style.display = "flex" 
        }
      }
    }
  }
  

 
  





    
    



  },[cuantos, resiste]);




const display = true;



    return (
      <div className="flex flex-row justify-center">
      <div className="bg-[#1E1E1E]">
        
      <div className="bg-[#ce1313] w-[1661px] h-[912px] border-[#6D0000] border-2">
        <div className="relative h-[912px]" >
          <div className="absolute w-[42px] h-[42px] top-[767px] left-[121px] border-2 border-[#000000] bg-[#141414] rounded-[21px] shadow-plane" />
          <div className="absolute w-[31px] h-[32px] top-[776px] left-[1594px] bg-[#bca900] rounded-full border-[2px] border-solid border-[#000000] shadow-plane" />
          <div className="absolute w-[1661px] h-[912px] top-0 left-0">
            <div className="absolute w-[384px] h-[106px] top-[33px] left-[40px]">
              <div className=" bg-gradient-radial absolute w-[118px] h-[118px] top-[-6px] left-[-6px] rounded-full border-[6px] border-solid border-[#1e1e1e]" />
              <div className="absolute w-[31px] h-[31px] top-[11px] left-[260px] bg-gradient-radial-yel rounded-full border-[3px] border-solid border-[#1e1e1e]" />
              <div className="absolute w-[31px] h-[31px] top-[11px] left-[356px] bg-gradient-radial-gre rounded-full border-[3px] border-solid border-[#1e1e1e]" />
              <div className="bg-gradient-radial-red absolute w-[31px] h-[31px] top-[11px] left-[164px] bg-[#830f0f] rounded-full border-[3px] border-solid border-[#1e1e1e]" />
            </div>
            <img className="absolute w-[804px] h-[76px] top-[100px] left-0" alt="Vector" src="vector-1.svg" />
            <img className="absolute w-[782px] h-[76px] top-[100px] left-[879px]" alt="Vector" src="vector-4.svg" />
            <img className="absolute w-[768px] h-[175px] top-[-2px] left-[893px]" alt="Vector" src="vector-3.svg" />
            <div className="border-b-2 border-darkred absolute w-[100px] h-[910px] top-0 left-[793px] [background:linear-gradient(90deg,rgb(180,19,19)_0%,rgb(194.44,26.74,26.74)_51.04%,rgb(180,19,19)_100%)] ">
              <div className="absolute w-[100px] h-[27px] top-[161px] left-0 [background:linear-gradient(90deg,rgb(109.44,0,0)_0%,rgb(109.44,0,0)_0.01%,rgba(109.44,0,0,0.57)_49.48%,rgb(109.44,0,0)_100%)]" />
              <div className="absolute w-[100px] h-[28px] top-[795px] left-0 [background:linear-gradient(90deg,rgb(109.44,0,0)_0%,rgba(109.44,0,0,0.57)_51.56%,rgb(109.44,0,0)_100%)]" />
            </div>
          </div>
          <div className=" h-[20px] w-[20px]" >






          <Svgs ids={"electric"} svg="/poke/electric.svg" posini={[160, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"bug"} svg="/poke/bug.svg"           posini={[240, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"water"} svg="/poke/water.svg"       posini={[320, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"ground"} svg="/poke/ground.svg"     posini={[400, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"dragon"} svg="/poke/dragon.svg"     posini={[480, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"dark"} svg="/poke/dark.svg"         posini={[560, 330]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>



          <Svgs ids={"fairy"} svg="/poke/fairy.svg"       posini={[160, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"fighting"} svg="/poke/fighting.svg" posini={[240, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"fire"} svg="/poke/fire.svg"         posini={[320, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"flying"} svg="/poke/flying.svg"     posini={[400, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"ghost"} svg="/poke/ghost.svg"       posini={[480, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"grass"} svg="/poke/grass.svg"       posini={[560, 430]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>



          <Svgs ids={"ice"} svg="/poke/ice.svg"           posini={[160, 530]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"normal"} svg="/poke/normal.svg"     posini={[240, 530]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"poison"} svg="/poke/poison.svg"     posini={[320, 530]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"psychic"} svg="/poke/psychic.svg"   posini={[400, 530]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"steel"} svg="/poke/steel.svg"       posini={[480, 530]} cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
         
          
          </div>
          <img
            className="absolute w-[109px] h-[56px] top-[735px] left-[1454px]"
            alt="Rectangle"
            src="rectangle-19.svg"
          />
          <img
            className="absolute w-[109px] h-[56px] top-[735px] left-[1562px]"
            alt="Rectangle"
            src="rectangle-20.svg"
          />
          <img className="absolute w-[108px] h-[56px] top-[751px] left-[286px] z-10" alt="Rectangle" src="rectangle-8.svg" onClick={()=>{setResiste(true)}}/>
          <img className="absolute w-[108px] h-[56px] top-[751px] left-[177px] z-10" alt="Rectangle" src="rectangle-7.svg" onClick={()=>{setResiste(false)}}/>
          <div className="absolute w-[650px] h-[469px] top-[242px] left-[87px]">
            <div className="relative w-[716px] h-[517px] z-0 bg-[url(/vector-5.svg)] bg-[100%_100%] bg-no-repeat bg-contain ">
              <div className="absolute w-[30px] h-[29px] top-[420px] left-[38px] bg-[#b21818] rounded-full border-2 border-solid border-[#1e1e1e] shadow-lin" />
              <div className="absolute w-[27px] h-[26px] top-[42px] left-[370px] bg-[#b21919] rounded-full border-2 border-solid border-[#1e1e1e] shadow-lin" />
              <div className="absolute w-[27px] h-[26px] top-[42px] left-[252px] bg-[#b21818] rounded-full border-2 border-solid border-[#1e1e1e] shadow-lin" />
              <div className="absolute w-[25px] h-[23px] top-[422px] left-[584px]">
                <div className="absolute w-[25px] h-[6px] top-0 left-0 bg-[#b21919] border-[0.7px] border-solid border-black" />
                <div className="absolute w-[25px] h-[6px] top-[9px] left-0 bg-[#b21919] border-[0.7px] border-solid border-black" />
                <div className="absolute w-[25px] h-[6px] top-[18px] left-0 bg-[#b21919] border-[0.7px] border-solid border-black" />
              </div>
              <div className=" w-[568px] h-[319px] top-[80px] left-[40px] bg-[#282c34] flex absolute rounded-[20px] shadow-custom-blue" ></div>
            </div>
          </div>


          <div id="ventanaDos" className="w-[676px] h-[205px] specialgrid top-[230px] left-[955px] bg-[#282c34] border border-solid border-black absolute rounded-[20px] shadow-Lcustom-blue " >
          <Svgs2 ids={"electric2"} svg="/poke/electric.svg" />
          <Svgs2 ids={"bug2"} svg="/poke/bug.svg"           />
          <Svgs2 ids={"water2"} svg="/poke/water.svg"       />
          <Svgs2 ids={"ground2"} svg="/poke/ground.svg"     />
          <Svgs2 ids={"dragon2"} svg="/poke/dragon.svg"     />
          <Svgs2 ids={"dark2"} svg="/poke/dark.svg"         />



          <Svgs2 ids={"fairy2"} svg="/poke/fairy.svg"      />
          <Svgs2 ids={"fighting2"} svg="/poke/fighting.svg"/>
          <Svgs2 ids={"fire2"} svg="/poke/fire.svg"        />
          <Svgs2 ids={"flying2"} svg="/poke/flying.svg"    />
          <Svgs2 ids={"ghost2"} svg="/poke/ghost.svg"      />
          <Svgs2 ids={"grass2"} svg="/poke/grass.svg"      />



          <Svgs2 ids={"ice2"} svg="/poke/ice.svg"           />
          <Svgs2 ids={"normal2"} svg="/poke/normal.svg"     />
          <Svgs2 ids={"poison2"} svg="/poke/poison.svg"     />
          <Svgs2 ids={"psychic2"} svg="/poke/psychic.svg"   />
          <Svgs2 ids={"steel2"} svg="/poke/steel.svg"       />
          <Svgs2 ids={"rock2"} svg="/poke/rock.svg"       />
          </div>


          <div className="w-[258px] h-[91px] top-[804px] left-[225px] bg-[#516349] border border-solid border-black absolute rounded-[20px] shadow-LLcustom-blue  " >
            <div className='flex content-center items-center justify-center h-[91px]'>
            
              <p className='font-font1 text-[60px]'>{resiste?"X2":"1/2"}</p>
          
            </div>
          
          </div>
          <img className="absolute w-[215px] h-[215px] top-[758px] left-[580px]" alt="Vector" src="vector-6.svg"/>
          <img className="absolute w-[149px] h-[75px] top-[742px] left-[955px]" alt="Group" src="group-5.png" />
          <img className="absolute w-[676px] h-[270px] top-[451px] left-[955px]" alt="Group" src="blu.svg" />
          <div className="w-[256px] h-[63px] top-[832px] left-[955px] bg-[#282c34] border border-solid border-black absolute rounded-[20px] shadow-LLcustom-blue" />
          <div className="w-[256px] h-[63px] top-[832px] left-[1375px] bg-[#282c34] border border-solid border-black absolute rounded-[20px] shadow-LLcustom-blue" />
        </div>
      </div>
    </div>
  </div>
    );
  };