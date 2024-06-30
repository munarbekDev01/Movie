import React, { useContext } from 'react';
import headlogo from '../../assets/img/header-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";
import { MovieContext } from '../../context';

const Header = () => {
    const {inputValue, setInputValue} = useContext(MovieContext)
    const {pogination, setPogination} = useContext(MovieContext)
    const { setLanguage} = useContext(MovieContext)
    const {dark, setDark} = useContext(MovieContext)
    const navigate = useNavigate()
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <img src={headlogo} alt="" width={200}/>
                    <div className="header--nav">
                        <Link to={"/"} className=''>Home</Link>
                        <Link to={"/Popular"} className=''>Popular</Link>
                        <Link to={"/TopRated"} className=''>Top Rated</Link>
                        <Link to={'/Favorite'} className=''>Favorite</Link>
                    </div>
                    <div className="header--search">
                        <input type="text" placeholder='search...' onChange={(e) => {
                            setInputValue(e.target.value)
                        }} />
                        <button  onClick={() => {
                            navigate(`/Search/${inputValue}`)
                        }}>search</button>
                        < CgDarkMode className='header--search__dark' onClick={() => {
                            setDark(!dark)
                            console.log(dark, 'dark')
                        }}/>
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">en-US</option>
                            <option value="ru-RU">ru-RU</option>
                            <option value="fr-FR">fr-FR</option>
                        </select>
                        <select onChange={(e) => setPogination(+e.target.value) }>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </div>
                </div>
                {/* <div className='hi'></div> */}
            </div>
        </div>
    );
};

export default Header;