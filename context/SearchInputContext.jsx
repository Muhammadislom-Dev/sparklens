import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function useMyContextSearch() {
  return useContext(MyContext);
}
export function MySearchContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const handleSearch = (evt) => {
    setSearch(evt);
  };

  const contextValue = {
    search,
    handleSearch,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
