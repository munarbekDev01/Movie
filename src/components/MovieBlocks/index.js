import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context';
import imgForFilm from '../../assets/img/film-img.jpeg'

const MovieBlocks = ({el}) => {
  const {dark} = useContext(MovieContext)
  
    return (
            <div className="popular--blocks" style={{
              border: `2px solid ${dark? 'white': 'black'}`
            }} key={el.id} >
                  <Link to={`/details/${el.id}`}>
                  
                  <img style={{
                    width:'300px',
                    height: '400px'
                  }}
                    src={el.poster_path? `https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path} ` : imgForFilm}
                    alt=""
                  />
                  </Link>
                  <h1>{el.title}</h1>
                  <h6>{el.release_date}</h6>
                </div>
    );
};

export default MovieBlocks;