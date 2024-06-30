import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { MovieContext } from "../../context";

const Video = ({ movieId }) => {
  const {language} = useContext(MovieContext)
  const [count, setCount] = useState(3)
  const [video, setVideo] = useState([]);
  const getVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=${language}`
    ).then((res) => {
      setVideo(res.data.results);
      console.log(video, "video");
    });
  };
  useEffect(() => {
    getVideo(API_KEY);
  }, []);
  return (
    <div id="video">
      <div className="container">
        
        <div className="video">
          {video.slice(0, count).map((el) => (
              <iframe
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${el.key}`}
                title="Плейлист для прыганья в ванной SPEED UP"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
          ))}
        </div>
          <center>

          <button onClick={() => {
            video.length > count? setCount(count + 3): setCount(3)
          }} >{video.length > count? 'more...' : 'shirt' }</button>
          </center>
      </div>
    </div>
  );
};

export default Video;
