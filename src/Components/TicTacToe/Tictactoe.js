import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import { useState, useContext } from 'react';
import { LangContext } from '../../App.js';

import '../../css/styles.css';

const Tictactoe = () => {

  const contextValue = useContext(LangContext);

  const PLAYERX = "1 - Xs";
  const PLAYER0 = "2 - 0s";

  const [turn, setTurn] = useState(PLAYERX)
  const [moves, setMoves] = useState(0)
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ])

  const appClick = (rowNumber, columnNumber) => {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? 'X' : '0';
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX)
    setValues(valuesCopy)
    setMoves(moves + 1)
  }

  const resetClick = () => {
    setTurn(PLAYERX)
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ])
    setMoves(0);
  }

  let text = contextValue.dictionary.tictactoe_player_turn + turn;

  return (
    <div className='container'>
      <div className='contained-text'>
        <Header text={text} />
        <Board values={values} appClick={appClick} />
        <h3>{contextValue.dictionary.tictactoe_moves}{moves}</h3>
        <Reset resetClick={resetClick}></Reset>
      </div>
    </div>
  )
}

export default Tictactoe
