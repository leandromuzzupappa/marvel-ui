import { ESearchAPI } from 'utils/enums/generalEnums';

export const renderOptions = () => {
  return Object.keys(ESearchAPI).map((option) => {
    const optionValue = ESearchAPI[option as keyof typeof ESearchAPI];
    return (
      <option key={optionValue} value={optionValue}>
        {optionValue}
      </option>
    );
  });
};
