import './styles.scss';
import { IButtonComponent } from 'utils/interfaces/generalInterfaces';

const Button = ({
  classes,
  children,
  handleClick,
  disabled,
}: IButtonComponent) => {
  return (
    <button
      className={`btn ${classes ? classes : ''} ${
        disabled ? `btn-disabled` : ''
      }`}
      onClick={(e) => handleClick && handleClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
