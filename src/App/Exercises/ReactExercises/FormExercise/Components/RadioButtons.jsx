import React from 'react';
import '../Style/radiobutton.css';

const RadioButtons = ({
  fieldName,
  label,
  required = false,
  register,
  errors = null,
  options,
}) => {
  return (
    <div className="field radio">
      <label htmlFor={fieldName}>
        {label}
        {required && '*'}
      </label>
      {options.map((option) => {
        return (
          <div key={option.value}>
            <input {...register(fieldName)} type="radio" value={option.VALUE} />
            <label htmlFor={option.VALUE} aria-invalid={errors && 'true'}>
              {option.LABEL}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
