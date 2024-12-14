import React from 'react'
import zara from './zara.png'
import load from './load-8510_256.gif'
function Preloader() {
  return (
    <div className='w-[100%] h-[100vh] bg-[#092038] text-white flex items-center justify-center '>
        <div className=''>
            <img src={zara} alt="" className='w-[300px] max-sm:w-[250px]' />
            <div>
            <img src={load} alt="" className='w-[60px] m-auto pt-5' />
            <p className='text-center text-[24px] max-sm:text-[17px] font-[600] tracking-wide'>Loading ...</p>
            </div>
            
        </div>
        </div>
  )
}

export default Preloader
