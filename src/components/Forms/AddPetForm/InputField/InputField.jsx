import { InputLabel, Input, ErrWrapper } from './InputField.styled';
import PropTypes from 'prop-types';

export const InputField = ({
  type,
  name,
  label,
  placeholder,
  errors,
  touched,
  emulTouch,
}) => {
  const isFieldInvalid =
    (errors[name] && touched[name]) ||
    (errors[name] && emulTouch.includes(name));

  return (
    <InputLabel>
      {label}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        data-invalid={isFieldInvalid}
      />
      {isFieldInvalid && <ErrWrapper>{errors[name]}</ErrWrapper>}
    </InputLabel>
  );
};

InputField.propTypes = {
  emulTouch: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
