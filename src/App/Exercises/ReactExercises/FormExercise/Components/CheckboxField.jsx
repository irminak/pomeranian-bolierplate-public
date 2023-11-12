import React from 'react';
import '../Style/checkbox.css';

const CheckboxField = ({
  fieldName,
  label,
  register,
  required = false,
  errors = null,
}) => {
  return (
    <div className="field checkbox">
      <input {...register(fieldName)} type="checkbox" />
      <label htmlFor={fieldName} aria-invalid={errors && 'true'}>
        {label}
        {required && '*'}
      </label>
    </div>
  );
};

export default CheckboxField;
