import React, { createContext, useContext, useState } from 'react';

const LoadingErrorContext = createContext();

export const useLoadingError = () => useContext(LoadingErrorContext);

export const LoadingErrorProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const contextValue = {
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <LoadingErrorContext.Provider value={contextValue}>
      {children}
    </LoadingErrorContext.Provider>
  );
};
