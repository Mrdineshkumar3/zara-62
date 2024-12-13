import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import '../App.css'
function Header({fill,setFill}) {
console.log(fill)
const usenavigate = useNavigate()
  return (
    <div>
      <div className="bg-[#D2E0FB] border-[#ffffff6e] border-b-2 flex justify-between items-center min-h-[60px] gap-y-4 p-2 max-lg:flex-col max-lg:items-start ">
        <div className="px-6">
          <Icon
            icon="simple-icons:musicbrainz"
            width="40"
            height="40"
            className="text-[#53a6ff] cursor-pointer "
          />
        </div>
        <div className="flex items-center justify-center w-[50%]  max-lg:w-[100%] gap-3">
          {/* <Icon
            icon="simple-icons:homeassistant"
            width="30"
            height="30"
            className="text-[#53a6ff] cursor-pointer"
          /> */}
          <div className="flex relative">
            {" "}
            <input
              type="text"
              className="w-[360px] max-lg:w-[90vw]  rounded-md h-[40px] pl-3 outline-none text-[#3495fc] font-[600]"
              placeholder="search song ..."
              onClick={()=>{usenavigate('/Music')}}
              onChange={(e)=>{setFill(e.target.value)}}
            />
            <Icon
              icon="wpf:search"
              width="26"
              height="26"
              className="text-[#53a6ff] absolute right-2 top-2 cursor-pointer"
              onClick={()=>{setFill(fill)}}
            />
          </div>
        </div>
        <div className="absolute right-6 text-[#53a6ff]">
          <h1 className=" tracking-wide font-bold za">zara</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
