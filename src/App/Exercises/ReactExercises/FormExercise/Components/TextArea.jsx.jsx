import React from 'react';

const TextArea = ({
  fieldName,
  label,
  required = false,
  placeholder = '',
  register,
  errors = null,
}) => {
  return (
    <div className="field text area">
      <label htmlFor={fieldName}>
        {label}
        {required && '*'}
      </label>
      <textarea
        {...register(fieldName)}
        aria-invalid={errors && 'true'}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
