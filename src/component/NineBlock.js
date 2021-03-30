import Clickable from './Clickable.js';
import { useState } from 'react';

function NineBlock(){

  const [turn, setTurn] = useState('A');

  function switchTurn(){
    if ( turn === 'A' ){
      setTurn('B');
    } else {
      setTurn('A');
    }
  }

  return (
    <div className="ttt">
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
      <Clickable turn={turn} onClick={switchTurn}/>
    </div>
  )
}

export default NineBlock;
