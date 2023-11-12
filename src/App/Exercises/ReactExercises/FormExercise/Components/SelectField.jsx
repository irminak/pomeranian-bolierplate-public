import React from 'react';

import '../Style/select.css';
import { ArrowIcon } from '../../../../Components/Icons/form/ArrowIcon';

const SelectField = ({
  label,
  fieldName,
  register,
  options,
  required,
  placeholder = '',
  errors = null,
}) => {
  return (
    <div className="field select">
      <label htmlFor={fieldName}>
        {label}
        {required && '*'}
      </label>
      <div className="customSelect">
        <select {...register(fieldName)} aria-invalid={errors && 'true'}>
          {options.map((option) => {
            return (
              <option key={option.VALUE} value={option.VALUE}>
                {option.LABEL}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
