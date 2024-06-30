import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { MovieContext } from "../../context";

const Home = () => {
  const {language} = useContext(MovieContext)
  const [bg, setBg] = useState([]);
  const getBg = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}`
    ).then((res) => {
      setBg(res.data.results.map((el) => el.backdrop_path));
    });
  };
  useEffect(() => {
    getBg(API_KEY);
  }, [language]);
  let getAllBg = Math.floor(Math.random() * bg.length);
  let randomBg = bg[getAllBg];

  return (
    <div
      
      id="home"
    >
      <div className="container">
        <div style={{
        background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${randomBg})`,
      }} className="home">
          
        <div  className="bg-dark">
          <h1>Добро пожаловать. <br /><span>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</span></h1>
          <button className="bg-dark--search">Search</button>
          <input type="text" placeholder="Найти фильм, сериал, персону......" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
