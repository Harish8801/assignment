import React, { useState } from 'react'
import "./timer.css";
const Timer = () => {


    const [timerId,setTimerId]=useState(null);
    const [watch ,setWatch]=useState(0);

    const start=()=>{
        if (!timerId){
            let id =setInterval(()=>{
                setWatch((prev)=>prev+1);
            },500);
            setTimerId(id);

        }
    }

    const pause=()=>{
        clearInterval(timerId);
        setTimerId(null)
    };
    const reset=()=>{
        clearInterval(timerId)
        setWatch(0)

    }
  return (
    <div className="timer">
    <div className="container">
   
      <div className="timer_container">
      <h1>StopWatch</h1>
   
   <h1>{watch}</h1>
          <button  className='restart'onClick={start}>Start</button>
          <button className='stop' onClick={pause}>Pause</button>
          <button className='restart' onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Timer;
