import React, { FC, PropsWithChildren } from 'react';
import './MyButton.css';

export interface MyButtonProps {
  color: string;
  big?: boolean;
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({ children, color, big, ...props }) => {

  const rootClasses = ['my-button']

  if (big) {
    rootClasses.push('big-btn')
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;