import Clickable from './Clickable.js';
import { useState } from 'react';

function NineBlock(){

  const [turn, setTurn] = useState('A');


  const switchTurn = ()=>{
    if ( turn === 'A' ){
      setTurn('B');
    } else {
      setTurn('A');
    }
  }

  return (
    <div className="ttt" onClick={()=>switchTurn()}>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
      <Clickable turn={turn}/>
    </div>
  )
}

export default NineBlock;
