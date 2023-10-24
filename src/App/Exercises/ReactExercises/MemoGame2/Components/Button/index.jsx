import './style.css';

export const Button = ({
  className = '',
  type = 'primary',
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
}) => {
  const activeClassName = isActive ? 'btn--active' : '';
  const disabledClassName = isDisabled ? 'btn--disabled' : '';
  const typeClassName = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    //...
  };
  // const className = `button_memo ${classNames} ${activeClassName} ${disabledClassName} ${typeClassName[type]}`;

  return (
    <button className="" disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
