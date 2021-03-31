import Clickable from './Clickable.js';
import { useState } from 'react';

function NineBlock(){

  const [turn, setTurn] = useState('A');
  const [profileA, setProfileA] = useState(1);
  const [profileB, setProfileB] = useState(1);


  const switchTurn = ()=>{
    if ( turn === 'A' ){
      setTurn('B');
    } else {
      setTurn('A');
    }
  }

  const addScore = (prime)=>{
    console.log(prime);
  }

  return (
    <div className="ttt">
      <Clickable prime="2" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="3" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="5" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="7" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="11" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="13" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="17" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="19" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Clickable prime="23" turn={turn} switchTurn={switchTurn} addScore={addScore}/>
    </div>
  )
}

export default NineBlock;
