import './styles.scss';
import { IInput } from 'utils/interfaces/generalInterfaces';
import { FC } from 'react';

const Input: FC<IInput> = ({
  handleChange,
  label,
  containerClasses,
  classes,
  placeholder,
  type,
  innerRef,
}) => {
  return (
    <div className={`input_row ${containerClasses ? containerClasses : ''}`}>
      {label && <label>{label}</label>}{' '}
      <input
        className={`input ${classes ? classes : ''}`}
        onChange={handleChange}
        placeholder={placeholder && placeholder}
        type={type}
        ref={innerRef}
      />
    </div>
  );
};

export default Input;
