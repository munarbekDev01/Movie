import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import loading from "../../assets/img/loading.svg";
import { API_KEY } from "../../API";
import MovieBlocks from "../MovieBlocks";
import { MovieContext } from "../../context";



const Popular = () => {
  const {language} = useContext(MovieContext)
  const [popular, setpopular] = useState([]);
  const {pogination, setPogination} = useContext(MovieContext);
  
  const getPopular = (key) => {
    setpopular([])
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${pogination}`
    ).then((res) => {
      setpopular(res.data.results);
    });
  };
  

  useEffect(() => {
    setTimeout(() => {
      getPopular(API_KEY);
    }, 2100);

  }, [language,pogination]);
  return (
    <div id="popular">
      <div className="container">
     
        { !popular.length ? (
          <center>
                <img src={loading} alt=""className="loading" />
            </center>
        ) : (
          <>
            <div  className="popular">
              {popular.map((el, index, arr) => (
                <MovieBlocks el={el} key={el.id}  />
              ))}
            </div>
            
            <div className="poganation">
              <button
                onClick={() =>
                  setPogination(pogination > 1 ? pogination - 1 : 1)
                }
              >
                back
              </button>
              <h1>{pogination}</h1>
              <button onClick={() => setPogination(pogination + 1)}>
                next 
              </button>
            </div>
          </>
        )}
       
      </div>
    </div>
  );
};

export default Popular;