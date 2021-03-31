import NineBlock from './component/NineBlock';
import Meta from './component/Meta';
import './App.css';
import { useState, useMemo } from 'react';

function App() {

  const [turn, setTurn] = useState('A');
  const [profileA, setProfileA] = useState(1);
  const [profileB, setProfileB] = useState(1);

  var winner = '';

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

      winAlgo.forEach(i => {
        if ( profileA % i === 0 ){
          winner = 'A';
        }
      })


      winAlgo.forEach(i => {
        if ( profileB % i === 0 ){
          winner = 'B';
        }
      })


  }, [profileA, profileB]
  )

  return (
    <div className="App">
      <NineBlock turn={turn} switchTurn={switchTurn} addScore={addScore}/>
      <Meta winner={winner} turn={turn} />
    </div>
  );
}

export default App;
