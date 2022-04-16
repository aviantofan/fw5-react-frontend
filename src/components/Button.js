import React from 'react';

export const Button = ({ className, ...rest }) => {
  return (
    <button className={`button-${className}`} {...rest}></button>
  );
};

export default Button;