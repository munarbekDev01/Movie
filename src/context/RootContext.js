import React, { useEffect, useState } from "react";
import { MovieContext } from ".";
import MovieDetails from "../Pages/MovieDetails";

const RootContext = ({ children }) => {
  const [inputValue, setInputValue] = useState();
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("");
  const [pogination, setPogination] = useState(1);
  const [favorite, setFavorite] = useState([]);
  function getAll() {
    
    let results = JSON.parse(localStorage.getItem('movie')) || []
    setFavorite(results)
    
  }
  useEffect(() => {
    getAll()
  }, [])
  return (
    <MovieContext.Provider
      value={{
        dark,
        setDark,
        language,
        setLanguage,
        pogination,
        setPogination,
        favorite,
        setFavorite,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
