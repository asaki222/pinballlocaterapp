import React from 'react';
import { StyledPinballLocation } from '../../Styles/StyledPinballList';

const PinballLocation = ({ location }) => {
  const {
    name,
    street,
    city,
    state,
    zip,
    phone,
    description,
    machine_names_first,
  } = location;
  
  return (
    <StyledPinballLocation>
      <h3>{name}</h3>
      <p>{street}, {city}, {state} {zip}</p>
      <p>Phone: {phone}</p>
      <p>Description: {description}</p>
      <p>Machines: {machine_names_first.join(', ')}</p>
    </StyledPinballLocation>
  );
};

export default PinballLocation;
