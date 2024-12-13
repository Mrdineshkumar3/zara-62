import React from 'react'

import empty from './1733728448637.png'
import { Icon } from "@iconify/react";
import '../App.css'


function Songs({songData,fill,playWith}) {
  let filteredsource =[]
  filteredsource= songData.filter((item,index)=>{
    return item.name.toLowerCase().includes(fill.toLowerCase()) || item.folder.toLowerCase().includes(fill.toLowerCase())
  })
  return (
    <div className='w-[100%] pb-[100px] '>
      {filteredsource.length==0?<>
      <div className='flex items-center justify-center flex-col h-[60vh]'>
        <img src={empty} className='w-[600px] anime' alt="" />
        <h1 className='text-[#123458] font-bold text-[30px] max-sm:text-[24px]'> <Icon icon="arcticons:nothing-x" width="27" height="27" className='inline pb-1'/> <span> Song Not Founded </span></h1>
        </div></>:<>
      <div className='px-4'>
      <div className='flex  justify-between md:grid  md:grid-cols-4 mt-10 mb-4 pl-2 text-[#123458] border-b pb-3 border-[#123458]'>
      <p className='font-[600]'><b className='mr-4'>#</b>Title</p>
      <p className='hidden md:block font-[600]'>Albam</p>
      <p className='hidden md:block font-[600]'>Date Added</p>
      <Icon icon="ion:timer-outline" width="20" height="20" className='max-sm:mr-3 font-bold' />
      </div>
      
        {filteredsource.map((item,index)=>{
          return<>
      <div onClick={()=>{playWith(item)}} key={index}
       className='flex  justify-between md:grid  cursor-pointer md:grid-cols-4 mt-5 mb-4 pl-2 text-[#123458] p-2 hover:bg-[#c6d8e9] focus:bg-[#c6d8e9]'>
      <p className=''><b className='mr-4 '>{index+1}</b><img   src={item.image} className=' inline w-[50px] rounded-[5px] h-[40px] mr-5' alt="" />
      {item.name.slice(0,25)}</p>
      <p className='hidden md:block pt-[8px] capitalize'>{item.folder}</p>
      <p className='hidden md:block pt-[8px] pl-[2px] '>5 Days ago</p>
      <p className='pt-[8px]'>{item.duration}</p>
      </div>     
          </>
        })}
     
      </div>
      </>}
      
       
    </div>
  )
}

export default Songs