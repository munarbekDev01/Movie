import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import  user   from "../../assets/img/actors-user.jpeg";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";

const Actors = ({ movieId }) => {
  const {language} = useContext(MovieContext)
  const [actors, setActors] = useState([]);
  const actorsDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };
  useEffect(() => {
    actorsDetails(API_KEY);
  }, [language]);
  let { profile_path, name, character } = actors;
  console.log(actors);
  return (
    <div id="actors">
      <div className="container">
        <div className="actors">
          <h1>Актёрский состав сериала</h1>
          <div className="blocks">
            {actors.map((el) => (
                <div className="block">
                  <Link to={`/actorDetails/${el.id}`}>
                  
                <img
                  src={el.profile_path?`https://media.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`:user}
                  alt="img"
                />
                  </Link>
                <h1>{el.name}</h1>
                <h3>{el.character}</h3>
                </div>
                ))}
                </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
// https://media.themoviedb.org/t/p/w138_and_h175_face/hINvryvce5tpod6kTnUg9ZTH8wg.jpg
