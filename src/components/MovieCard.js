import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";




export default function MovieCard({items}) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    // const navigate = useNavigate();
    
    
    
    return(
    <div>
            <div>
                    <div className="card">
                        <img className="card-img-top" src={items.posterURL}/>
                            <div className="card-body" style={{ display: 'flex',justifyContent: 'space-between',alignItems:'center'}}>
                                <h5 className="card-title" style={{marginBottom: '0'}}>{items.title}</h5>
                                <ReactStars  classNames="rating"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={12}
                                    isHalf={false}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                    value={items.rating}
                                /> 

                                <Link to={`/${items.title}/${items.id}`}>
                                    <Button variant="primary">
                                        Play Now
                                    </Button>
                                </Link>
                            
                            </div>
                    </div>
            </div>
    </div>
    );

}