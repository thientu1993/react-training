/** @format */

import React, { ChangeEvent, forwardRef } from 'react';

type InputProps = {
  label: string;
  type?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputText = forwardRef<HTMLInputElement, InputProps>(({ label, type = 'text', value, onChange }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} value={value} onChange={onChange} />
    </div>
  );
});

export default InputText;

