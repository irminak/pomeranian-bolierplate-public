import { Button } from '../Button/';
import { MenuField } from '../MenuField';

import './style.css';

export const GameMenu = ({ endGame, min, sec, moves }) => {
  return (
    <div>
      <MenuField title="Czas gry" className="content">
        <Button isDisabled>
          {min}:{sec}
        </Button>
      </MenuField>
      <MenuField title="Liczba ruchów" className="content">
        <Button isDisabled>{moves}</Button>
      </MenuField>
      <MenuField title="Przyciski sterujące" className="content">
        <Button
          onClick={endGame}
          type="secondary"
          classNames="button_memo stop"
        >
          Stop
        </Button>
      </MenuField>
    </div>
  );
};
