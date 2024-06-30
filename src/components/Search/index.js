import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import MovieBlocks from "../MovieBlocks";

const Search = () => {
  const { movieName } = useParams();
  const [search, setSearch] = useState([]);
  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    ).then((res) => {
      setSearch(res.data.results);
      console.log(search, "hulk");
    });
  };
  useEffect(() => {
    getSearch(API_KEY);
  }, [movieName]);

  return (
    <div id="popular">
      <div className="container">
      <div  className="popular">
              {search.map((el) => (
                <MovieBlocks el={el} key={el.id}  />
              ))}
            </div>
      </div>
    </div>
  );
};

export default Search;
