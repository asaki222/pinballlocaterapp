import React, { createContext, useContext, useState } from 'react';

const PinballContext = createContext();

export const PinballProvider = ({ children }) => {
  const [pinballData, setPinballData] = useState({ latitude: '', longitude: '', pinballLocations: {locations: []} });
  
  const contextValue = {
    pinballData,
    setLatitude: (newLatitude) => setPinballData((prevData) => ({ ...prevData, latitude: newLatitude })),
    setLongitude: (newLongitude) => setPinballData((prevData) => ({ ...prevData, longitude: newLongitude })),
    setPinballLocations: (newLocations) => setPinballData((prevData) => ({ ...prevData, pinballLocations: newLocations })),
  };
  return (
    <PinballContext.Provider value={contextValue}>
      {children}
    </PinballContext.Provider>
  );
};

export const usePinballContext = () => {
  const context = useContext(PinballContext);
  if (!context) {
    throw new Error('usePinballContext must be used within a PinballProvider');
  }
  return context;
};
