import React from 'react';
import './Game.css';
import Board from "./Board";

function Game(): JSX.Element {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        {/*<div></div>*/}
        {/*<ol></ol>*/}
      </div>
    </div>
  );
}

export default Game;
