import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesData from './MoviesData';
// import Popup from 'reactjs-popup';
import ReactStars from "react-rating-stars-component";
import ReactPlayer from 'react-player'
import { Offcanvas, Container, Row} from 'react-bootstrap';
import { useParams } from "react-router-dom";


// import { useHistory } from "react-router-dom";
// import MovieCard from "./MovieCard.js";


export default function DescriptionMovie() {

    // const history = useHistory();
    // const home = () => {
    //     history.push("/");
    // }
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const movieDescription = MoviesData.filter((movie) => Number(movie.id) === Number(id));
                 

         return (
            <div>

            <Offcanvas show={show} onHide={handleClose} placement='top' name='top'>
                <Container className="container" >

                    <Row>
                        <Offcanvas.Header closeButton>
                           <h1>{movieDescription[0].title}
                                <ReactStars  classNames="rating"
                                            count={5}
                                            size={22}
                                            isHalf={false}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                            value={movieDescription[0].rating}
                                        /> 
                            </h1>
                        </Offcanvas.Header>
                    </Row>

                    <Row>
                        <div style={{marginBottom:'20px',padding: '0px 30px' }}>
                            <ReactPlayer url={ movieDescription[0].teaser} 
                            height="381px" width="100%" />
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <h5>Description: </h5>
                            <p>{movieDescription[0].description}</p>
                        </div>
                    </Row>

                </Container>
            </Offcanvas>

        </div>
         );
}



