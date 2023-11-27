import React from 'react';
import { StyledInput, StyledLabel } from '../Styles/StyledCoordinateInput';

const CoordinateInput = ({ label, value, onChange }) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput type="text" value={value} onChange={onChange} placeholder={`Enter ${label}`} />
    </StyledLabel>
  );
};

export default CoordinateInput;
