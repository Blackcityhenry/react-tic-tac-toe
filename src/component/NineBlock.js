import Clickable from './Clickable.js';
import { useState, useMemo } from 'react';

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

  const addScore = (prime, occupy)=>{
    if ( occupy === 'A') {
      setProfileA(profileA * prime);
    } else {
      setProfileB(profileB * prime);
    }
  }

  const checkWin = useMemo(
    ()=>{
    // 2 3 5
    // 7 11 13
    // 17 19 23

    // let row1 = 2*3*5;
    // let row2 = 7*11*13;
    // let row3 = 17*19*23;
    //
    // let col1 = 2*7*17;
    // let col2 = 3*11*19;
    // let col3 = 5*13*23;
    //
    // let dia1 = 2*11*23;
    // let dia2 = 5*11*17;
    //
    // let winAlgo = [row1, row2, row3, col1, col2, col3, dia1, dia2];

    let winAlgo = [30, 1001, 7429, 238, 627, 1495, 506, 935];

      console.log(profileA);
      winAlgo.forEach(i => {
        if ( profileA % i === 0 ){
          return 'A';
        }
      })


      console.log(profileB);
      winAlgo.forEach(i => {
        if ( profileB % i === 0 ){
          return 'B';
        }
      })

  }, [profileA, profileB]
  )

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
      { profileA + ':' + profileB }
    </div>
  )
}

export default NineBlock;
