import React from 'react'
import { useRef } from 'react';
import '../App.css'
import zara from './zara.png'

import { useState } from 'react';
import { useEffect } from 'react';
import { Icon } from "@iconify/react";
function Player({onesong1,setOnesong,inputRef,start,setStart,playlist,songData}) {
    

    
    const [volume,setVolume]=useState(1)
    const [suffle,setSuffle]=useState(false)
    const [loop,setLoop]=useState(false)
    const handleVolumeChange = (event)=>{
      const newvolume=event.target.value;
      setVolume(newvolume);
      if(inputRef.current){
        inputRef.current.volume=newvolume
      }
    }

    const seekbar = useRef(null);
    const seekbg = useRef(null);
    const [time,setTime]=useState({
      currenttime:{
        second:0,
        minute:0
      },
      totaltime:{
        second:0,
        minute:0
      },

    })
    

    useEffect(()=>{
      setTimeout(()=>{
      inputRef.current.ontimeupdate = () =>{
        seekbar.current.style.width = (Math.floor(inputRef.current.currentTime/inputRef.current.duration*100))+"%"
        setTime({
          currenttime:{
            second:Math.floor(inputRef.current.currentTime %60),
            minute:Math.floor(inputRef.current.currentTime /60)
          },
          totaltime:{
            second:Math.floor(inputRef.current.duration %60),
            minute:Math.floor(inputRef.current.duration /60)
          },
        })
      }
      
        // if(inputRef.current.currentTime == inputRef.current.duration){
           
        //    const auto = async () =>{

        //     await setOnesong(songData[onesong1.id+1]);
        //          // await inputRef.current.play();
        //     await inputRef.current.play()
        //     setStart(true);

        //    }
        //    auto()
          
        // }
        if (inputRef.current.currentTime === inputRef.current.duration) {

          if(suffle){
            console.log('suffled')
            const shu = async () => {
              let random = Math.floor(Math.random()* 60)
              
              if (random < songData.length) { // Check if there's a next song
                await setOnesong(songData[random]);
          
                // Wait for the 'canplaythrough' event
                const handleCanPlayThrough = () => {
                  inputRef.current.play();
                  setStart(true);
                  inputRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
                };
                inputRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
              } else {
                // Handle the end of the playlist (optional)
                console.log("End of playlist");
                setStart(false); // Or whatever you want to do
              }
            };
            shu(); 
          }
          else if(loop){
            const loo = async () => {
              let autoloop = onesong1.id;
              
              // Check if there's a next song
                await setOnesong(songData[autoloop]);
          
                // Wait for the 'canplaythrough' event
                setTimeout(() => {
                  inputRef.current.play()
                  setStart(true)
                }, 1000);
              
            };
            loo();  
          }
          else{
          const auto = async () => {
            let nextSongIndex = onesong1.id + 1;
            if(nextSongIndex >=62){
              nextSongIndex=0;
            }
            
            if (nextSongIndex < songData.length) { // Check if there's a next song
              await setOnesong(songData[nextSongIndex]);
        
              // Wait for the 'canplaythrough' event
              const handleCanPlayThrough = () => {
                inputRef.current.play();
                setStart(true);
                inputRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
              };
              inputRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
            } else {
              // Handle the end of the playlist (optional)
              console.log("End of playlist");
              setStart(false); // Or whatever you want to do
            }
          };
          auto();
        }
        }
      
      
      },1000)
    })
  
    const palying = () =>{
      inputRef.current.play()
      setStart(true)
    }
    const phased = () =>{
      inputRef.current.pause()
      setStart(false)

    }

         const prev = async () =>{
      if(onesong1.id>0){
        await setOnesong(songData[onesong1.id-1]);
        await inputRef.current.play();
        setStart(true);

      }
     } 
     const nex = async () =>{
      if(onesong1.id < songData.length-1){
        await setOnesong(songData[onesong1.id+1]);
        await inputRef.current.play();
        setStart(true);

      }
     } 
    
    const seeksong = async (e) =>{
      inputRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*inputRef.current.duration)
    } 
    
   const [hii,setHii]=useState(false)
   const [mute,setMute]=useState(true)
   const [expand,setExpand]=useState(false)
    return (
    <>
    <div className={`fixed bottom-0 py-2 flex items-center justify-between w-[100%] px-2 bg-[#d8e4fc] exman ${expand?'xxx':''}`} >
       <div className='vb'>
       <div className='justify-self-start '>
            <div className='flex gap-3 w-[300px] max-lg:w-auto ic'>
                <img src={onesong1.image} alt="image no founded"
                className='w-[66px] h-[50px] max-sm:w-[50px] max-sm:h-[40px]  rounded-[8px] ij' />
                <div className='max-lg:hidden fgh'>
                    <p className='font-bold text-[#123458] nmb'> <span className='hidden hio'>Name </span>{onesong1.name}</p>
                    <p className='text-[12px] text-[#123458] nmb'><span className='hidden hio font-bold '>Descripion </span><span className='hidden nnb'>{onesong1.desc}</span> <span className='bb'>{onesong1.desc.slice(0,12)}</span></p>
                    <p className='text-[12px] hidden sd '><span className='font-bold hio '>Albam </span >{onesong1.folder}</p>
                    <p className='text-[12px] hidden fg '><span className='font-bold hio '>Duration </span >{onesong1.duration} minutes</p>
                
                </div>
            </div>
        </div>
       </div>
        
        <div className='flex items-center justify-center flex-col mm'>
        <div className='flex items-center justify-center'>
        
          {suffle ?<Icon icon="solar:shuffle-bold" onClick={()=>{setSuffle(!suffle)}} className='cursor-pointer mr-1 cc text-[26px] text-[#123458]' /> :<Icon icon="fluent:arrow-shuffle-20-regular" onClick={()=>{setSuffle(!suffle)
            setLoop(false)
          }} className='cursor-pointer cc text-[26px] text-[#123458] mr-1' />}
       
       <Icon icon="game-icons:fast-backward-button" onClick={prev} className='cursor-pointer cc text-[25px] text-[#123458]' />
      {start? <Icon icon="gridicons:pause" onClick={phased}   className='text-[30px] cc cursor-pointer text-[#123458]'/>:
      <Icon icon="heroicons-solid:play" onClick={palying}  className='text-[30px] cc cursor-pointer text-[#123458]'/>

      }

        
        <Icon icon="game-icons:fast-forward-button" onClick={nex} className='text-[25px] cc cursor-pointer text-[#123458]'/>
       {/* {loop? <Icon icon="typcn:arrow-loop-outline" onClick={()=>{setLoop(!loop) 
        
       } } className='text-[32px] cc cursor-pointer text-[#123458]' />: <Icon icon="typcn:arrow-loop" onClick={()=>{setLoop(!loop)
        setSuffle(false)
       }} className='text-[32px] cc cursor-pointer text-[#123458]' />}  */}
       {loop ?<Icon icon="cil:loop-1" className='text-[23px] font-bold cc cursor-pointer text-[#123458] ml-1' onClick={()=>{setLoop(!loop) 
        
      } } /> :<Icon icon="cil:loop" className='text-[23px] cc font-bold cursor-pointer text-[#123458] ml-1' onClick={()=>{setLoop(!loop)
        setSuffle(false)
       }} />}
        </div>
        <div className='flex items-center justify-center gap-3'>
            <p className=' text-[#123458] font-[400] max-sm:text-[11px] cc'>{time.currenttime.minute<10?'0'+time.currenttime.minute:time.currenttime.minute}:{time.currenttime.second<10?'0'+time.currenttime.second:time.currenttime.second}</p>
            <div ref={seekbg} onClick={seeksong} className='h-[6px] max-sm:h-[7px] bg-[#8f99a3] jhj w-[400px] rounded max-sm:w-[160px]'>
                <hr ref={seekbar} className='w-[0%] max-sm:h-[7px] h-[6px] mty mt-[-1px] ccc bg-[#123458] rounded'/>
            </div>
            {/* <p className='text-[#123458] font-[400] max-sm:text-[11px] cc'>{time.totaltime.minute<10?'0'+time.totaltime.minute:time.totaltime.minute}:{time.totaltime.second<10?'0'+time.totaltime.second:time.totaltime.second}</p> */}
            <p className='text-[#123458] font-[400] max-sm:text-[11px] cc'>{onesong1.duration}</p>
        </div>
        </div>
        <div className='flex items-center justify-center nn'>
            <div className=' hidden md:flex gap-2 max-md:flex-col-reverse'>
            {mute?<Icon icon="iconoir:sound-high-solid"  className='text-[25px] cc text-[#123458] max-sm:text-[20px] cursor-pointer' onDoubleClick={()=>{setMute(false) 
              setVolume(0)
              
              inputRef.current.volume=0
              
            }} />:<Icon icon="fluent:speaker-mute-24-filled" className='text-[25px] cc text-[#123458] max-sm:text-[20px] cursor-pointer ' onDoubleClick={()=>{setMute(true)
              setVolume(1)
            
              
              inputRef.current.volume=1
              
            }} />}
            <input type="range" id="volume" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}  className=''/>
            </div>
             <div className={`hidden max-md:flex gap-2 hov ${hii?'run':''}`}>
            {/* <Icon icon="iconoir:sound-high-solid"  className='text-[25px] text-[#123458] max-sm:text-[20px]' onClick={()=>{setHii(!hii)}} /> */}
            {mute?<Icon icon="iconoir:sound-high-solid"  className='text-[25px] cc text-[#123458] max-sm:text-[20px] cursor-pointer' onClick={()=>{setHii(!hii)}} onDoubleClick={()=>{setMute(false) 
              setVolume(0)
              
              inputRef.current.volume=0
              
            }} />:<Icon icon="fluent:speaker-mute-24-filled" className='text-[25px] cc  text-[#123458] max-sm:text-[20px] cursor-pointer ' onClick={()=>{setHii(!hii)}} onDoubleClick={()=>{setMute(true)
              setVolume(1)
            
              
              inputRef.current.volume=1
              
            }} />}
            <input type="range" id="volume" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}  className='hide we'/>
          
            </div> 
            <Icon icon="fa6-solid:expand" width="20" height="20" className='ml-2 cursor-pointer' onClick={()=>{setExpand(!expand)}}/>
        </div>
       <div className='absolute top-3 left-3 ff gap-3 items-center justify-center hidden ' ><img src={zara} alt="" className='w-7' /> <span className='last'>zara</span></div>
       
       <audio src={onesong1.flie} ref={inputRef} ></audio>
    </div>


    </>
  )
}

export default Player