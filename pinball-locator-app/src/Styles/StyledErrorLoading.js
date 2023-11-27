import styled, { keyframes } from 'styled-components';

export const ErrorContainer = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Spinner = styled.div`
border: 6px solid #f3f3f3; /* Light grey */
border-top: 6px solid #3498db; /* Blue */
border-radius: 50%;
width: 50px;
height: 50px;
animation: ${rotate} 1s linear infinite;
`;
