import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { StartMenu } from './Components/StartMenu';
import { GameMenu } from './Components/GameMenu';
import { Playground } from './Components/Playground';

const game_time = 120;
let counter = 0;
let score = 0;

export const HitTheMole2 = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [boardSize, setBoardSize] = useState(16);
  const [showScore, setShowScore] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(0);
  const [gameCards, setGameCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setShowScore(false);

    setTime(game_time);
    setMoves(0);

    setFirstCard(null);
    setSecondCard(null);
    counter = 0;
    score = 0;
  };

  const handleStopGame = () => {
    setIsGameStarted(false);

    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <div>
      <NavLink to="/exercise" className="backBtn">
        {'<'}Memo
      </NavLink>
      {showScore ? (
        <h2 className="memo">
          Gratulacje! Twój wynik to: {score} par w czasie {game_time - time}{' '}
          sekund!
        </h2>
      ) : (
        <h2 className="memo">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h2>
      )}
      <div>
        {!isGameStarted && (
          <StartMenu setBoardSize={setBoardSize} startGame={handleStart} />
        )}
        {isGameStarted && (
          <>
            <GameMenu endGame={handleStopGame} moves={moves} />
            <Playground
              setGameEnded={setGameEnded}
              setGameStarted={setGameStarted}
              boardSize={boardSize}
            />
          </>
        )}
      </div>
    </div>
  );
};
