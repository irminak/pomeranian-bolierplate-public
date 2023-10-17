import React, { useState } from 'react';
import molepng from '../../../Images/mole.png';
// import './styles.css';

const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
];

const interval_time = 1000;
const randomField = (max) => Math.floor(Math.random() * max) + 1;

export function HitTheMole2() {
  const [isStarted, setIsStarted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [gameFields, setGameFields] = useState(fields);
  const [moleFieldId, setMoleFieldId] = useState(randomField(fields.length));
  const [intervalId, setIntervalId] = useState(null);

  const handleStartGame = () => {
    setIsStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldId(randomField(fields.length));
    }, interval_time);

    setIntervalId(intervalId);
  };

  const handleStopGame = () => {
    setIsStarted(false);
    clearInterval(intervalId);
  };
  const handleClick = () => {};

  return (
    <div>
      <h2>
        Gra polegająca na podązaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>
      {isStarted ? (
        <div>
          <div>
            <p>Czas do końca</p>
            <button></button>
          </div>
          <div>
            <p>Wynik</p>
            <button></button>
          </div>
          <div>
            <p>Przyciski sterujące</p>
            <button onClick={handleStopGame}>Stop</button>
          </div>
          <div>
            {gameFields.map((field) => {
              const isMolePresent = field.id === moleFieldId;

              return (
                <div onClick={handleClick} className="field">
                  {isMolePresent && <img src={molepng} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>Czas gry</p>
            <button>1 minuta</button>
          </div>
          <div>
            <p>Liczba kretów</p>
            <button>1 kret</button>
          </div>
          <div>
            <p>Przyciski sterujące</p>
            <button onClick={handleStartGame}>Start</button>
          </div>
        </div>
      )}
    </div>
  );
}
