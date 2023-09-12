import React,{useEffect, useState} from 'react'
import "./style.css"

const Timer =() => {
  const [timer, setTimer] = useState(0);
  const [isRunning,setIsRunning]=useState();


  const handleStart =()=>{
    setIsRunning(true);
  }

  const handlePause=()=>{

    setIsRunning(false);
   
  }

  const handleReset =()=>{
    setIsRunning(false);
    setTimer(0);
    
    
  }

  useEffect(()=> {

    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimer((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

 
  return (
    <div className="run">
      
      <h1>LIFE CYCLE METHOD</h1>

    <p className="time">
   SECONDS: {timer}
    </p>
    <div className="btn">
    
    <button  className="startBtn" onClick = {handleStart}>Start</button>
    <button className="pauseBtn"  onClick = {handlePause}>Pause</button>
    <button className="resetBtn" onClick = {handleReset}>Reset</button>
    </div>
    </div>
  )
  }

export default Timer