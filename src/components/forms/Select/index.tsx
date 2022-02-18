import './styles.scss';
import { ISelect } from 'utils/interfaces/generalInterfaces';
import { FC } from 'react';

const Select: FC<ISelect> = ({
  handleChange,
  label,
  containerClasses,
  classes,
  defaultValue,
  children,
  innerRef,
}) => {
  return (
    <div className={`select_row ${containerClasses ? containerClasses : ''}`}>
      {label && <label>{label}</label>}{' '}
      <select
        className={`select ${classes ? classes : ''}`}
        defaultValue={defaultValue}
        onChange={handleChange}
        ref={innerRef}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
