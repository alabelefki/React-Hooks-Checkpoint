import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard.js";


export default function Filter({movieName, titleSearch, ratingSearch}) {


    const searchMovies =  movieName.filter(
 
             (movie) => {
                 return (
                 ratingSearch === 0 ?
                 movie.title.toLowerCase().includes(titleSearch.toLowerCase()):
                 movie.rating === ratingSearch && movie.title.toLowerCase().includes(titleSearch.toLowerCase())
 
                 )})

                 
 
         return (
             <div>
         
             <div className='movie-list'>
                 
             { 

             searchMovies.map((items) => <MovieCard items={items} key={items.id} />) 
             
             }
             </div>

                <div className='Not-found'>
             {
             
             searchMovies.length === 0 && (

                <div>Your search for "{titleSearch}" did not find any matches.</div>
            
                )
            
            }
            </div>
         
         </div>
         );
}