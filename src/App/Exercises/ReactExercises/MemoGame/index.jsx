import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// const cards = [
//   { id: 1, key: 'A' },
//   { id: 2, key: 'U' },
//   { id: 3, key: 'K' },
//   { id: 4, key: 'R' },
//   { id: 5, key: 'K' },
//   { id: 6, key: 'U' },
//   { id: 7, key: 'A' },
//   { id: 8, key: 'R' },
// ];

const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(2);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [gameCards, setGameCards] = useState([]);
  const [firstID, setFirstID] = useState('');
  const [secondID, setSecondID] = useState('');

  const handleStartGame = () => {
    setIsGameStarted(true);
    setTime(game_time);
    setScore(0);
    setIsGameEnded(false);
  };
  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);

    setFirstID('');
    setSecondID('');
  };

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }

  const cardsGenerator = (num) => {
    const newArray = [];
    for (let i = 0; i < num / 2; i++) {
      newArray.push({ id: i, key: keys[i], isDone: false });
      newArray.push({ id: 10 + i, key: keys[i], isDone: false });
    }
    const shuffleCards = shuffleArray(newArray);
    setGameCards(shuffleCards);
  };

  const handleClick = (clickedCard) => {
    if (firstID === '') {
      setFirstID(clickedCard.id);
      return;
    }
    if (clickedCard.id === firstID) return;
    setSecondID(clickedCard.id);

    if (firstID + 10 === clickedCard.id || firstID === clickedCard.id + 10) {
      // clickedCard.isDone = firstID === clickedCard.id;
      // clickedCard.isDone = secondID === clickedCard.id;
      setGameCards(
        gameCards.map((card) => {
          return {
            ...card,
            isDone: card.id === clickedCard.id,
          };
        })
      );
      console.log(gameCards);
    }

    // if (firstID + 10 !== clickedCard.id || firstID !== clickedCard.id + 10) {
    //   setTimeout(() => {
    //     setFirstID('');
    //     setSecondID('');
    //   }, 300);
    // } else if (
    //   firstID + 10 === clickedCard.id ||
    //   firstID === clickedCard.id + 10
    // ) {
    //   console.log('sukces');
    // }
  };
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      // handleStopGame();
      setIsGameEnded(true);
    }
  }, [time]);

  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  return (
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Memo
      </NavLink>
      {isGameEnded ? (
        <h2 className="memo">
          Gratulacje! Twój wynik to: {score} par w czasie !
        </h2>
      ) : (
        <h2 className="memo">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h2>
      )}
      {isGameStarted ? (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Czas gry</div>
              <div className="content">
                <button className="button_memo score">
                  {min}:{sec}
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Liczba ruchów</div>
              <div className="content">
                <button className="button_memo score">{moves}</button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStopGame} className="button_memo stop">
                  Pass
                </button>
              </div>
            </div>
          </div>
          <div className="cardsplace">
            {gameCards.map((el) => {
              return (
                <div onClick={() => handleClick(el)} className="onecard">
                  <span>
                    {(firstID === el.id || secondID === el.id) && el.key}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Liczba elementów</div>
              <div className="content">
                <button
                  onClick={() => cardsGenerator(8)}
                  className={
                    gameCards.length === 8
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  8 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 3))
                  // }
                  onClick={() => cardsGenerator(16)}
                  className={
                    gameCards.length === 16
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  16 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 5))
                  // }
                  onClick={() => cardsGenerator(20)}
                  className={
                    gameCards.length === 20
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  20 elementów
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStartGame} className="button_memo start">
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
