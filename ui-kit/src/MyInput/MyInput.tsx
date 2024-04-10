import React, { FC } from 'react';
import './MyInput.css';

export interface MyInputProps {
  color: string;
  big?: boolean;
  placeholder?: string;
  label: string;
}

const MyInput: FC<MyInputProps> = ({ color, big, placeholder, label, ...props }) => {

  const rootClasses = ['my-input']

  if (big) {
    rootClasses.push('big-input')
  }

  return (
    <label>
      {label}
      <input placeholder={placeholder} className={rootClasses.join(' ')} style={{ color }} />
    </label>
  );
};

export default MyInput;