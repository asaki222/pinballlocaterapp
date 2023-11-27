import React from 'react';
import { ErrorContainer } from '../Styles/StyledErrorLoading';

const ErrorComponent = ({ error }) => {
  return <ErrorContainer>Error: {error}</ErrorContainer>;
};

export default ErrorComponent;
