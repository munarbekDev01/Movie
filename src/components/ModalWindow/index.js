import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import axios from 'axios';
import { MovieContext } from '../../context';

const ModalWindow = ({movieId}) => {
    const {language} = useContext(MovieContext)
    const [md, setMd] = useState({})
    const getModal = (key) => {
       axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`).then((res) => {
        setMd(res.data)
       })
    }
    useEffect(() => {
        getModal(API_KEY)
    }, [language])
    
    let {poster_path,
        title,
        genres,
        overview,
        runtime,
        tagline,
        vote_average,
        release_date,
        backdrop_path,} = md
    console.log(md);
    return (
        <div  id="modalWindow">
            <div className="container">
                   {
                <div style={{
                    background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
                    
                }} className="modalWindow">
                   <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="img" />
                   <div className='win-text'>
                   <h1>{title}</h1>
                   <h2>{Math.floor(runtime / 60)}h {runtime % 60}min{" "}</h2>
                   <h3>{release_date}</h3>

                   </div>
                </div>
                   }
                        
            </div>
        </div>
    );
};

export default ModalWindow;