import Cross from './Cross';
import Circle from './Circle';
import { useState } from 'react';

function Clickable({ turn, switchTurn, addScore }){

  const [clicked, setClicked] = useState(false);

  const [occupy, setOccupy] = useState('');

  function clickEvent(){


    if (clicked){

    } else {

      switchTurn();
      setClicked(true);
      setOccupy(turn);
    }
  }

  return (
    <div className={clicked ? 'clickable--clicked clickable' : 'clickable'} onClick={()=>clickEvent()}>
      {clicked && (occupy === 'A' ? <Cross/> : <Circle/>)}
    </div>
  )
}

export default Clickable;
