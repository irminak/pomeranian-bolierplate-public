import { useState } from 'react';

export const RTLTesting = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <h1>RTL Testing</h1>
      <button onClick={handleClick}>Wyświetl!</button>
      <p>Sprawdzamy czy ten element jest w strukturze</p>
      {isVisible && <span>Widoczny element</span>}
    </div>
  );
};
