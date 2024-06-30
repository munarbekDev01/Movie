import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ActorFilms from "../../components/ActorFilms";
import { MovieContext } from "../../context";

const ActorDetails = () => {
  const {language} = useContext(MovieContext)
  const {dark} = useContext(MovieContext)
  const [biographya, setBiographya] = useState(200);
  const [actor, SetActor] = useState({});
  const { personId } = useParams();
  const getActorDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`
    ).then((res) => {
      SetActor(res.data);
    });
  };
  useEffect(() => {
    getActorDetails(API_KEY);
  }, [language]);
  let {
    biography,
    birthday,
    deathday,
    name,
    place_of_birth,
    profile_path,
    also_known_as,
    known_for_department,
  } = actor;
  console.log(actor);
  return (
    <div id="actorDetails">
      <div className="container">
        {
          <>
            <div className="actorDetails">
              <div className="actorDetails--left">
                <img
                  style={{
                    width: "100%",
                  }}
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
                  alt=""
                />
                <div className="actorDetails--left__icon">
                  <a>
                    <BsInstagram />
                  </a>
                  <a>
                    <FaTiktok />
                  </a>
                  <a>
                    <FaHome />
                  </a>
                </div>
                <h2
                  style={{
                    width: "100%",
                  }}
                >
                  Personal information
                </h2>
                <div className="actorDetails--left__information">
                  <h3>
                    Fame for <br />
                    <span style={{
                    color: `${dark? 'white' : 'rgba(0, 0, 0, 0.74)'}`
                    
                    }}>{known_for_department}</span>
                  </h3>
                  <h3>
                    Date of Birth <br />{" "}
                    <span style={{
                    color: `${dark? 'white' : 'rgba(0, 0, 0, 0.74)'}`
                    
                    }} >
                      {birthday}
                      {`(${birthday?.slice(0, 4) - 2024}-years old)`}
                    </span >{" "}
                  </h3>
                  <h3>
                    Place of Birth <br /> <span style={{
                    color: `${dark? 'white' : 'rgba(0, 0, 0, 0.74)'}`
                    
                    }}>{place_of_birth}</span>
                  </h3>
                  <h3>
                    Also known as <br /> <span style={{
                    color: `${dark? 'white' : 'rgba(0, 0, 0, 0.74)'}`
                    
                    }} >{also_known_as}</span>{" "}
                  </h3>
                </div>
                <h1></h1>
              </div>
              <div className="actorDetails--right">
                <h1>{name}</h1>
                <h2>Biography</h2>
                <h4
                  style={{
                    width: "900px",
                  }}
                >
                  {biography?.slice(0, biographya)}{" "}
                  <span
                    onClick={() => {
                      biography.length > biographya
                        ? setBiographya(biography.length)
                        : setBiographya(200);
                    }}
                  >
                   


                    {biography?.length > biographya ? "more..." : "shirt"}
                  </span>
                </h4>
                <div className="actorDetails--right__videos">
                  <h1>Fame for</h1>
                  <ActorFilms id={personId} />
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default ActorDetails;
