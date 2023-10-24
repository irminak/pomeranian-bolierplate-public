import './style.css';

export const MenuField = ({ title = '', className = '', children }) => {
  return (
    <div>
      <h5>{title}</h5>
      <div className="">{children}</div>
    </div>
  );
};
