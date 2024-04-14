// DarkModeContext.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}
export function MyContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };
  
    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
  }
