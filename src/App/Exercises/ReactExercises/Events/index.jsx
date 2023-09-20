import React, { useState } from 'react';

import './style.css';

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const handleOnClick = () => {
    setText('Kliknięto we mnie');
  };

  return (
    <div>
      <h2>Cześć </h2>
      <button onClick={handleOnClick}>{text}</button>
    </div>
  );
}
