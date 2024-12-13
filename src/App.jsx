import React, { useEffect, useRef, useState } from 'react'

import Content from './componenent/Content';
import Header from './componenent/Header';
import Info from './componenent/Info';
import Menu from './componenent/Menu';
import Player from './componenent/Player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {albumsData,songData} from './componenent/Data'
import aud from './componenent/chamkchallo.mp3'
import Songs from './componenent/Songs';
import ScrollToTop from './componenent/ScrollToTop'
import Preloader from './componenent/Preloader';

function App()
 { 
 const inputRef = useRef(null);
  const [start,setStart]=useState(false)
 const [selfalbam,setSelfalbam]=useState(albumsData[0])
 const [playlist,setplaylist]=useState(songData)
 const [song,setSong]=useState(aud)
 const [onesong,setOnesong]=useState(songData[0])
 const [fill,setFill]=useState('')
 const playWith =async (qqq)=>{
    
  await setOnesong(qqq);
  await inputRef.current.play();
  setStart(true);

}
const [loading,seLoading] = useState(false)
useEffect(()=>{
  seLoading(true)
  setTimeout(()=>{
    seLoading(false)
  },3000)
},[])
 
   return (
    <>
    {loading ?<div className='w-[100vw] h-[100vh] flex items-center justify-center'><Preloader /></div>:
      <div className='bg-[#d2e0fbb9] min-h-[100vh]'>
      
       
       
      <BrowserRouter>

      <ScrollToTop />
      <Header fill={fill}
      setFill={(ss)=>{setFill(ss)}} />
      <Menu />
      <Routes>
       <Route path='/' element={<Content 
       albumsData={albumsData}
       setSelfalbam={(aa)=>{setSelfalbam(aa)}}
       playlist1={playlist}
       setplaylist={(bb)=>{setplaylist(bb)}}
       songData1={songData}
       playWith={(gg)=>{playWith(gg)}}
       
       />}></Route>
       <Route path='/Albam' element={<Info 
       selfalbam1={selfalbam}
       playlist1={playlist}
       setSong={(dd)=>{setSong(dd)}}
       setOnesong={(ee)=>{setOnesong(ee)}}
       inputRef1={inputRef}
       setStart={(aq)=>{setStart(aq)}}
        />}></Route>
        <Route path='/Music' element={<Songs 
        songData={songData}
        fill={fill}
        playWith={(bb)=>{playWith(bb)}}/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      
      
      <Player song1={song}
      setSong={(cc)=>{setSong(cc)}}
     onesong1={onesong}
     setOnesong={(oo)=>{setOnesong(oo)}}
     inputRef={inputRef}
     start={start}
     setStart={(az)=>{setStart(az)}}
     playlist={playlist}
     songData={songData}

      />
      
     </div>
    }
      

    
    </>
  )
}

export default App
