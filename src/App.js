import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import MovieDetails from './Pages/MovieDetails';
import ActorDetails from './Pages/ActorDetails';
import { MovieContext } from './context';
import { useContext } from 'react';
import Favorite from './components/Favorite';
import Search from './components/Search';
function App() {
  const {dark} = useContext(MovieContext)
  return (
    <div style={{
      color: `${dark ? 'white' : 'black'}`, 
      background: `${dark? 'black' : 'white'}`
    }} className="">
     <Header/>
     
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='/TopRated' element={<TopRated/>} />
        <Route path='/details/:movieId' element={<MovieDetails/>} />
        <Route path='/actorDetails/:personId' element={<ActorDetails/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
        <Route path='/Search/:movieName' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;