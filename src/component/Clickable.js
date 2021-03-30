import Cross from './Cross';
import Circle from './Circle';
import { useState } from 'react';

function Clickable(turn){

  const [clicked, setClicked] = useState(false);

  function clickEvent(){

    setClicked(true);
  }

  return (
    <div className={'clickable'} onClick={clickEvent}>
      {clicked && (turn === 'A' ? <Cross/> : <Circle/>)}
    </div>
  )
}

export default Clickable;
