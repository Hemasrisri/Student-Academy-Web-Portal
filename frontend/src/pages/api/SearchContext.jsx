import React, { createContext, useState, useContext, useEffect } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reciever, setReciever]=useState(0)
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, reciever, setReciever }}>
      {children}
    </SearchContext.Provider>
  );
};
