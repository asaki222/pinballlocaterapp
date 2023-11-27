import React from 'react';
import { StyledButton } from '../Styles/StyledButton';

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
