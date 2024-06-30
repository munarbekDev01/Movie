import React, { useContext } from 'react';
import { MovieContext } from '../../context';
import MovieBlocks from '../MovieBlocks';

const Favorite = () => {
    const {favorite} = useContext(MovieContext)
    return (
            <div id="popular">
      <div className="container">
      <div  className="popular">
              {favorite.map((el) => (
                <MovieBlocks el={el} key={el.id}  />
              ))}
            </div>
      </div>
    </div>
    );
};

export default Favorite;