import { useEffect, useState } from 'react';

import { generateBoard } from '../../helper';

import './style.css';

export const Playground = ({
  boardSize = 16,
  setIsGameStarted,
  setShowScore,
  counter,
  setMoves,
  score,
  handleStopGame,
}) => {
  const [gameCards, setGameCards] = useState(generateBoard(boardSize));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const handleClick = (clickedCard) => {
    firstCard ? setSecondCard(clickedCard) : setFirstCard(clickedCard);
    counter++;
    setMoves(counter);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.keyID === secondCard.keyID) {
        score++;
        setGameCards(
          gameCards.map((card) => {
            const isDone =
              (card.keyID === firstCard.keyID &&
                firstCard.keyID === secondCard.keyID) ||
              card.isDone;
            return {
              ...card,
              isDone: isDone,
            };
          })
        );
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setTimeout(() => {
          setFirstCard(null);
          setSecondCard(null);
        }, 300);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (gameCards.every((card) => card.isDone)) {
      handleStopGame();
      setShowScore(true);
    }
  }, [gameCards]);

  return (
    <div className="cardsplace">
      {gameCards.map((el) => {
        return (
          <div
            onClick={() => handleClick(el)}
            key={el.id}
            // className="onecard"
            className={
              secondCard === el
                ? 'red onecard'
                : firstCard === el || el.isDone
                ? 'green onecard'
                : 'onecard'
            }
          >
            <span>
              {(firstCard === el || secondCard === el || el.isDone === true) &&
                el.key}
            </span>
          </div>
        );
      })}
    </div>
  );
};
