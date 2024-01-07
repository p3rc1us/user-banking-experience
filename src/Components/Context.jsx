import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState(2000);

  const updateContextValue = (newValue) => {
    setContextValue(newValue);
  };

  return (
    <MyContext.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
