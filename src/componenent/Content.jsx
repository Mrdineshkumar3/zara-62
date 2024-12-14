import React from 'react'

import '../App.css'

import { useNavigate } from 'react-router-dom'
function Content({albumsData,setSelfalbam,playlist1,setplaylist,songData1,playWith}) {
  const usenavigate=useNavigate()
  let daat=[]
  let trandig = songData1.filter((item2,index2)=> item2.folder=="Tranding songs")

  
  return (
    <div className='w-[100%] pb-[100px] '>
    <div className='px-4 '>
        <h1 className='font-bold text-[23px] text-[#123458] tracking-[0.5px] mb-4 px-2'>Features Charts</h1>
        <div className='p-2 grid grid-flow-col gap-3 overflow-auto pt-[17px]'>
        {albumsData.map((item,index4)=>{
            return<>
             <div key={index4} onClick={()=>{usenavigate('/Albam') 
             
              setSelfalbam(item)
              daat=songData1.filter((item1,index1)=>item1.folder==item.songdataref)
              setplaylist(daat)
              
              }} className='p-2 w-[250px] border rounded-[5px] bg-white hhh cursor-pointer '>
                <img src={item.image} alt="nothing" className='w-[250px] h-[220px]  rounded-[5px]' />
                <div className='mt-2'>
                    <h2 className='font-bold text-[15px] text-[#123458]' >{item.neme}</h2>
                    <p className='font-[450] text-[13px] text-[#123458]'>{item.desc}</p>
                </div>
            </div>
            </>
        
        })}
           
            
        </div>
    </div> 
    <div className='px-4 mt-6' >
    <h1 className='font-bold text-[23px] text-[#123458] tracking-[0.5px] mb-4 px-2'>Today's Tranding </h1>
    <div className='grid grid-flow-col  gap-3 w-[100%] p-2 overflow-auto pt-[17px]'>
      {trandig.map((item,index)=>{
        return<>
         <div onClick={()=>{
            playWith(item)
         }} key={index} className='w-[250px] p-2 bg-white rounded-[5px] hhh' >
           <img src={item.image} alt="no" className='w-[250px] h-[220px] rounded-[5px] '/>
           <p className='font-[500] text-[#123458] pt-2 pl-1'>{item.name}</p>
           <p className=' text-[#123458] pt-2 pl-1 text-[13px]'>{item.desc}</p>
         </div>     
        </>
       
      })}
    
    </div>

    </div>
    </div>
  )
}

export default Content
