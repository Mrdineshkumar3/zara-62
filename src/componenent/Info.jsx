import React from 'react'


import { Icon } from "@iconify/react";

function Info({selfalbam1,playlist1,setSong,setOnesong ,inputRef1,setStart}) {
  const playWith =async (qqq)=>{
    
    await setOnesong(qqq);
    await inputRef1.current.play();
    setStart(true);

  }
  return (
    <div className='px-4 pb-[100px] ' style={{background:'linear-gradient( #12345800,#d8e4fc)'}}>
      <div className=' flex gap-7 items-end max-lg:flex-col max-lg:items-start'>
        <div>
          <img src={selfalbam1.image} alt="" className='w-[220px] h-[220px] rounded-[5px]' />
        </div>
        <div className='pb-3'> 
          <p className='font-[500] text-[#123458]'>Playlist</p>
          <h1 className='text-[#123458] font-bold text-[50px] max-md:text-[30px] max-sm:text-[25px]'>{selfalbam1.neme}</h1>
          <p className='font-[500] text-[#123458] max-sm:mt-2'>Your weekly update of the most played tracks</p>
          <p className='flex font-[500] py-2 text-[#123458] max-sm:text-[13px]'> <Icon
          icon="simple-icons:musicbrainz"
          
          className="text-[#53a6ff] cursor-pointer text-[20px]  "
        /> <span className='font-[700] '>Zara</span>* 13032019 likes *<span className='font-[700]'>10 songs</span> , about 45 min  </p>

        </div>
      </div>
      <div className='flex justify-between md:grid  md:grid-cols-4 mt-10 mb-4 pl-2 text-[#123458] border-b pb-3 border-[#123458]'>
      <p className='font-[600]'><b className='mr-4'>#</b>Title</p>
      <p className='hidden md:block font-[600]'>Albam</p>
      <p className='hidden md:block font-[600]'>Date Added</p>
      <Icon icon="ion:timer-outline" width="20" height="20" className='max-sm:mr-3 font-[600]' />
      </div>
      {
        playlist1.map((item,index)=>{
          return<>
          <div key={index} onClick={()=>{
            playWith(item)
          }} className='flex  justify-between md:grid  cursor-pointer md:grid-cols-4 mt-5 mb-4 pl-2 text-[#123458] p-2 hover:bg-[#c6d8e9] focus:bg-[#c6d8e9]'>
      <p className=''><b className='mr-4 '>{index+1}</b><img src={item.image} className=' inline w-[50px] rounded-[5px] h-[40px] mr-5' alt="" />
      {item.name.slice(0,25)}</p>
      <p className='hidden md:block pt-[8px]'>{selfalbam1.albam}</p>
      <p className='hidden md:block pt-[8px] pl-[2px]'>5 Days ago</p>
      <p className='pt-[8px]'>{item.duration}</p>
      </div>
          </>
        })
      }
      
    </div>
  )
}

export default Info