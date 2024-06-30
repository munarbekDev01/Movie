import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import imgForFilm from '../../assets/img/film-img.jpeg'
import { Link } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";
import MovieBlocks from "../MovieBlocks";
import { MovieContext } from "../../context";

const ActorFilms = ({ id }) => {
  const {language} = useContext(MovieContext)
  const [ActorFilm, SetActorFilm] = useState([]);
  const getActorFilms = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`
    ).then((res) => {
      SetActorFilm(res.data.cast);
      console.log(ActorFilm, "film");
    });
  };
  useEffect(() => {
    getActorFilms(API_KEY);
  }, [language]);
  let {poster_path,backdrop_path,title} = ActorFilm
  return (
    <div   style={{
        display: 'flex',
        overflowX: 'scroll',
        width: '900px',
        height: '300px',
        gap: '10px',
        padding: '30px 0'
    }} id="actorFilms">
        {
            ActorFilm.map((el) => (
               <>
               <div className="">
                <Link to={`/details/${el.id}`}>
               <img style={{
                  width: '150px',
                  height: '75%',
                  borderRadius: '10px'
               }} src={el.backdrop_path?`https://media.themoviedb.org/t/p/w150_and_h225_bestv2${el.backdrop_path}`:imgForFilm} alt="" />
                </Link>

               <h5 style={{
                textAlign: 'center'
               }}>{el.title}</h5>
               </div>
               </>
                

            ))
        }
    </div>
  );
};

export default ActorFilms;
