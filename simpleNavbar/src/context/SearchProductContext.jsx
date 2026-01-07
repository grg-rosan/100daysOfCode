import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading]  = useState(false)

  useEffect(() => {
    if (!search) {
      return;
    }
    const searchInput = async () => {
        setLoading(true)
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${search}`
      );
      const data = await res.json();
      setResult(data);
      setLoading(false)
      console.log(data);
    };
    searchInput();
  }, [search]);
  return (
    <div>
      <SearchContext.Provider value={{ result, search, setSearch, loading }}>
        {children}
      </SearchContext.Provider>
    </div>
  );
};

export const useSearch = () => useContext(SearchContext);
