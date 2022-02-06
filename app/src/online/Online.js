import { useEffect, useState } from 'react';
import Stopwatch from './stopwatch/Stopwatch';
import './Online.css';

import { Link } from "react-router-dom";

import Confetti from 'react-confetti';

import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:8000";
let socket;

function Online() {
  const [scramble, setScramble] = useState("(click the stopwatch to begin)");

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
  }, [scramble]);


  const handleSocket = () => {
    socket.emit("userStatus", "Ready")
    socket.on("scrambleReciever", data => {
        socket.emit("userStatus", "Playing")
        data = data.replace(/,/g, ' ');
        console.log(data)
        setScramble(data)
    }) 
    return () => {
        // socket.emit("userStatus", "Stopped");
        socket.disconnect();
    }
  }
  return (
    <div class='wrapper'>
        <Confetti width={window.width} height={window.height} recycle={false} tweenDuration={10000}></Confetti>
        <div className='no-footer'>
            <div className='header'>
                <div className='arrow'>
                    <button>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2.5%" fill="#444" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </Link>
                    </button>
                </div>
                <div className='title-div'>
                    <h1 className='title'>Multiplayer</h1>
                </div>
            </div>
            <div className='stopwatch' onClick={handleSocket}>
                <Stopwatch />
            </div>
        </div>
        <div className='footer'>
            <div className='scramble'>
                <p>{scramble}<br /></p>
            </div>
        </div>
    </div>
  )
}   

export default Online;

