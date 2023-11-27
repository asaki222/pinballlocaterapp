import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #3498db; /* Set your preferred background color */
  color: #fff; /* Set your preferred text color */
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Set your preferred hover background color */
  }
`;