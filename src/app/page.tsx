'use client'
  import React, { useState, useEffect } from 'react';
  import Svgs from "./pokesvg"
  import Svgs2 from "./pokesvg2"
  import poketipes from "./poketipes.json"
  import "./globals.css"
  
  type Resultado = {
    debiles: string[],
    fuertes: string[],
    [key: string]: string[]; //por si acaso xd
};

  type TypeChart = {
    [attackerType: string]: {
      [defenderType: string]: number;
    };
  };

  function eliminarDuplicados(lista1: string[], lista2: string[]): string[] {
    
    lista1 = lista1.filter(function(val) {
      return lista2.indexOf(val) == -1;
    });
    
    return lista1;
}



  function getTypesWeakerThanOne(typeChart: TypeChart, actual: string): any {
    const weakerTypes: string[] = [];
    const strongestTypes: string[] = [];
   
    

    for (const attackerType in typeChart) {
      const defenderTypes = typeChart[attackerType];
  
      
      if (attackerType === actual) {
        for (const defenderType in defenderTypes) {
          if (defenderTypes[defenderType] < 1) {
            var defenderType2 = defenderType;
            weakerTypes.push(defenderType);
          }
          if(defenderTypes[defenderType] > 1 ){
            var atackerType = defenderType;
            strongestTypes.push(defenderType);

          }
        }
      }
    }
   
      
      return {
        debiles: Array.from(new Set(weakerTypes)),
        fuertes: Array.from(new Set(strongestTypes))
    };
}
  
  export default function Home(){
    
    
    const [cuantos, setCuantos] = useState<number>(0);
    //cuantos tipos activos hay:
    const sitio = (newPulsado: boolean) => { 
      setCuantos((prevCuantos: number) => (newPulsado ? prevCuantos + 1 : prevCuantos - 1));
      

    }

const noborrar = false;

  const [resiste, setResiste] = useState<boolean>(false)

  const [listaElemento, setListaElemento] = useState<Record<string,string | null>>({

    null:null
  })

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
    

    var json:TypeChart = poketipes;
   
    for (var elements in listaElemento) {
    
      

    const mostrar:string[] = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "steel", "fairy", "dragon"];

    

    for (var x in mostrar){

    var actual = document.getElementById((mostrar[x]) + "2");

      if(actual){
        actual.classList.remove("animacionaparicion");
        actual.style.display = "none";
        
      }
    }  
  }
  //Primero borra lo anterior (arriba) luego pinta lo nuevo (abajo)
  
    
  
  
 
  var debiles:string[] = [];
  var fuertes:string[] = [];
  var mostrar2:string[] = []; //Esto es para que no de errores
  for (var elements in listaElemento) {
    
    if(listaElemento[elements] != null){
    
      const operacion:Resultado = getTypesWeakerThanOne(json, elements)
      
      operacion.debiles.forEach(debil => {
        debiles.push(debil)
      });
      operacion.fuertes.forEach(fuerte => {
        fuertes.push(fuerte)
      });

    

      
      
      mostrar2 = resiste?eliminarDuplicados(debiles,fuertes):eliminarDuplicados(fuertes,debiles)
    


    }
  }
  for (var x in mostrar2){

    var actual:HTMLElement|null = document.getElementById((mostrar2[x]) + "2");
    
    
    if(actual){
      actual.style.display = "flex" ;
      actual.classList.add("animacionaparicion")
      actual.style.opacity = "1" ;
    }
  }
  

 
  





    
    



  },[cuantos, resiste]);








    return (
      
      <div className="bg-[#1E1E1E] relative items-center w-[1661px] h-[912px] mt-1">
        
      <div className="bg-[#ce1313] w-[inherit] h-auto relative border-[#6D0000] border-2">
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
            <img className="absolute w-[804px] h-[100px] top-[92px] left-0" alt="Vector" src="vector-1dos.svg" />
            <img className="absolute w-[782px] h-[76px] top-[100px] left-[879px]" alt="Vector" src="vector-4.svg" />
            <img className="absolute w-[768px] h-[175px] top-[-2px] left-[893px]" alt="Vector" src="vector-3.svg" />
            <div className="border-b-2 border-darkred absolute w-[100px] h-[914px] top-0 left-[793px] [background:linear-gradient(90deg,rgb(180,19,19)_0%,rgb(194.44,26.74,26.74)_51.04%,rgb(180,19,19)_100%)] ">
              <div className="absolute w-[100px] h-[27px] top-[161px] left-0 [background:linear-gradient(90deg,rgb(109.44,0,0)_0%,rgb(109.44,0,0)_0.01%,rgba(109.44,0,0,0.57)_49.48%,rgb(109.44,0,0)_100%)]" />
              <div className="absolute w-[100px] h-[28px] top-[795px] left-0 [background:linear-gradient(90deg,rgb(109.44,0,0)_0%,rgba(109.44,0,0,0.57)_51.56%,rgb(109.44,0,0)_100%)]" />
            </div>
          </div>
          <div className=" h-[20px] w-[20px] " />
 
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
          <img className="absolute w-[88px] h-[26px]  top-[751px] left-[286px] z-10 cursor-pointer" alt="Rectangle" src="rectangle-8.svg" onClick={()=>{setResiste(false);document.getElementById("glitched")?.classList.remove("glitchtext");void document.getElementById("glitched")?.offsetWidth; document.getElementById("glitched")?.classList.add("glitchtext")}}/>
          <img className="absolute w-[88px] h-[26px] top-[751px] left-[177px] z-10 cursor-pointer" alt="Rectangle" src="rectangle-7.svg" onClick={()=>{setResiste(true); document.getElementById("glitched")?.classList.remove("glitchtext");void document.getElementById("glitched")?.offsetWidth; document.getElementById("glitched")?.classList.add("glitchtext")}}/>
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
              <div className=" w-[568px] h-[319px] top-[80px] left-[40px] relative bg-[#282c34] rounded-[20px] shadow-custom-blue " >

              <div className='specialgrid2'>




          <Svgs ids={"electric"} svg="/poke/electric.svg" cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"bug"} svg="/poke/bug.svg"           cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"water"} svg="/poke/water.svg"       cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"ground"} svg="/poke/ground.svg"     cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"dragon"} svg="/poke/dragon.svg"     cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"dark"} svg="/poke/dark.svg"         cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>



          <Svgs ids={"fairy"} svg="/poke/fairy.svg"       cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"fighting"} svg="/poke/fighting.svg" cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"fire"} svg="/poke/fire.svg"         cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"flying"} svg="/poke/flying.svg"     cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"ghost"} svg="/poke/ghost.svg"       cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"grass"} svg="/poke/grass.svg"       cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>



          <Svgs ids={"ice"} svg="/poke/ice.svg"           cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"normal"} svg="/poke/normal.svg"     cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"poison"} svg="/poke/poison.svg"     cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"psychic"} svg="/poke/psychic.svg"   cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"steel"} svg="/poke/steel.svg"       cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>
          <Svgs ids={"rock"} svg="/poke/rock.svg"         cuantos={cuantos} onPulsado={sitio} onClick={clicked}/>




          </div>


              </div>
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
          <Svgs2 ids={"rock2"} svg="/poke/rock.svg"         />
          </div>


          <div className="w-[258px] h-[91px] top-[804px] left-[225px] bg-[#456338] border border-solid border-black absolute rounded-[20px] shadow-LLcustom-blue " >
            <div className='flex content-center items-center justify-center h-[91px] '>
            
              <p id='glitched' className='font-font1 text-[60px] glitchtext text-[#101f15] cursor-default'>{resiste?"/2":"X2"}</p>
          
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
  
    );
  };