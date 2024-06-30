import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import { FcViewDetails } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { HiBookmarkSquare } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import Actors from "../../components/Actors";
import ModalWindow from "../../components/ModalWindow";
import Video from "../../components/Video";
import { MovieContext } from "../../context";

const MovieDetails = () => {
  const {favorite, setFavorite} = useContext(MovieContext)
  const { language} = useContext(MovieContext)
  const [modal, setModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  let { movieId } = useParams();
  const getMovieDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setMovieDetails(res.data);
    });
  };
  const addToFavorite = () => {
    let findFavorite = favorite.find((el) => el.id === movieDetails.id)
    if (findFavorite) {
      let deleteFavorite = favorite.filter((el) => el.id !== movieDetails.id)
      setFavorite(deleteFavorite)
      localStorage.setItem('movie', JSON.stringify(deleteFavorite))
    } else {

      let results = [...favorite, movieDetails]
      setFavorite(results)
      localStorage.setItem('movie', JSON.stringify(results))
    }
  }
  let like = favorite.some((el) => el.id === movieDetails.id)
  useEffect(() => {
    getMovieDetails(API_KEY);
  }, [language]);

  let {
    // poster_path,
    title,
    // genres,
    overview,
    runtime,
    tagline,
    vote_average,
    release_date,
    backdrop_path,
  } = movieDetails;
  return (
    <>
      <div
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
        }}
        id="movieDetails"
      >
        <div className="container">
          <div className="movieDetails">
            <img
              onClick={() => {
                setModal(true);
              }}
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`}
              alt=""
            />
            <div className="gl-text">
              <h1>{title}</h1>
              <div className="date">
                <h3>{release_date}</h3>
                <h3>
                  {Math.floor(runtime / 60)}h {runtime % 60}min{" "}
                </h3>
              </div>
              <div className="rating">
                <h1>{Math.floor(vote_average * 10)}%</h1>
                <h3>
                  {" "}
                  Rating <h2>What's your Vibe?</h2>
                </h3>
              </div>
              <div className="details-icons">
                <a>
                  <FcViewDetails />
                </a>
                <a>
                  <BiLike />
                </a>
                <a onClick={() => {
                  addToFavorite()
                  
                }} style={{
                  color: like ? 'red' : 'white'
                }}>
                  <HiBookmarkSquare /> 
                </a>
                <a className="a-trailer">
                  <FaPlay />
                  Воспроизвести трейлер
                </a>
              </div>
              <h2>{tagline}</h2>
              <div className="text">
                <h1>Overview</h1>
                <h1>{overview}</h1>
                {/* <h1>{poster_path}</h1> */}
              </div>
            </div>
          </div>
          <div
            style={{
              display: modal === true ? "block" : "none",
            }}
            className="Modal-window"
          >
            <h1
              onClick={() => {
                setModal(false);
              }}
              className="x"
            >
              x
            </h1>
            <ModalWindow movieId={movieId} />
          </div>
        </div>
      </div>
      <div className="">
        <Actors movieId={movieId} />
      </div>
      <Video movieId={movieId} />
    </>
  );
};
export default MovieDetails;
