import React, { useEffect, useRef, useState ,} from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import '../App.css'




function Menu() {
  
   const usenavigate=useNavigate()
    const inputRef = useRef(null) 
   
    useEffect(()=>{
    inputRef.current.focus();
    },[]) 
    // const [glow,setGlow]=useState(true)
    // const [glowx,setGlowx]=useState(false)
  
  return (
    <div className=" p-4  px-6 flex items-center justify-between flex-row-reverse">
      <div className="flex gap-2">
        <Icon
          icon="mingcute:left-line"
          width="24"
          height="24"
          className="text-[#7b8b9b] cursor-pointer hover:text-[#123458]"
          onClick={()=>{usenavigate(-1)}}

           
        
        />
        <Icon
          icon="mingcute:right-line"
          width="24"
          height="24"
          className="text-[#7b8b9b] cursor-pointer hover:text-[#123458]"
          onClick={()=>{usenavigate(+1)}}
          
        />
      </div>
      {/* focus:bg-[#123458] */}
      <div className={`flex gap-3 mt-2 ` }>
        <button
        onClick={()=>{
          usenavigate('/')
          // setGlow(true)
          // setGlowx(false)
        }}  ref={inputRef} className="px-5 py-1 outline-none glow1   rounded-3xl font-[500] ">All</button>
        <button onClick={()=>{
          usenavigate('/Music')
          // setGlow(false)
          // setGlowx(true)
        }} className="px-5 py-1 outline-none  glow2   rounded-3xl font-[500] ">Music</button>
      </div>
    </div>
  );
}

export default Menu;
