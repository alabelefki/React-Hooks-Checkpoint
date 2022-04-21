import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import AddMovie from './AddMovie.js';



export default function NavBar({titleSearch, setTitleSearch,movieName, setMovieName, ratingSearch, setRatingSearch}) {
    const handleChange = (event) => setTitleSearch(event.target.value);
    const ratingChanged = (e) => {setRatingSearch(e)};
    


    return(
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <h2 className="navbar-brand">WATCHMOVIES</h2>
                    <form className="d-flex input-group-lg">
                        <input className="form-control me-2" 
                            type="search" 
                            placeholder="Search for a Movie..." 
                            aria-label="Search"
                            onChange={handleChange}
                            value={titleSearch}>
                        </input>
                    </form>
                    <AddMovie setMovieName={setMovieName} movieName={movieName} />
                </div>
                <div className='rate'>
                    <h6>Or search by star Rating :</h6>
                    <ReactStars  classNames="rating"
                                count={5}
                                onChange={ratingChanged}
                                value={ratingSearch}
                                size={20}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            /> 
                </div>
            </nav>
        </div>
    );

}

