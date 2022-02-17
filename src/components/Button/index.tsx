import './styles.scss';
import { IButtonComponent } from 'utils/interfaces/generalInterfaces';

const Button = ({ classes, children, handleClick }: IButtonComponent) => {
  return (
    <button
      className={`btn ${classes}`}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
