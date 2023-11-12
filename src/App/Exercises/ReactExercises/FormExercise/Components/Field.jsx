import React from 'react';
import '../Style/inputfield.css';

const InputField = ({
  fieldName,
  type = 'text',
  label,
  required = false,
  placeholder = '',
  register,
  errors = null,
}) => {
  return (
    <div className="field text">
      <label htmlFor={fieldName}>
        {label}
        {required && '*'}
      </label>
      <input
        {...register(fieldName)}
        aria-invalid={errors && 'true'}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
