import './App.css';
import React, {useState} from "react";
import NavBar from './components/NavBar.js';
import Filter from './components/Filter ';
import MoviesData from './components/MoviesData.js';
import DescriptionMovie from './components/DescriptionMovie.js';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Route ,Routes} from "react-router-dom";



function App() {
  const [movieName, setMovieName] = useState(MoviesData)
  const [titleSearch, setTitleSearch] = useState('');
  const [ratingSearch,setRatingSearch] =  useState(0)

  return (
    <div>
        <h3 className='titre'>Trending Movies To watch now

        <NavigateNextIcon />
        <NavigateNextIcon />
        <NavigateNextIcon />
        </h3>

        
      <NavBar 
          titleSearch={titleSearch}
          movieName={movieName} 
          setMovieName={setMovieName} 
          setTitleSearch={setTitleSearch} 
          setRatingSearch={setRatingSearch}
          ratingSearch ={ratingSearch}
      />
             
      <Filter 
          movieName={movieName} 
          titleSearch={titleSearch} 
          ratingSearch={ratingSearch}   
      />
      <Routes>
      <Route path="/:title/:id" element={<DescriptionMovie />} />
      </Routes>
    </div>
  );
}

export default App;
