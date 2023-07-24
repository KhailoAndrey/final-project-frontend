import { RadioInput, InputLabel } from './RadioBtn.styled';
import PropTypes from 'prop-types';

export const RadioBtn = ({ value, selected, name, children }) => {
  return (
    <InputLabel selected={selected} name={name}>
      {children}
      {value[0]}
      <RadioInput type="radio" name={name} value={value[1]} />
    </InputLabel>
  );
};

RadioBtn.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
