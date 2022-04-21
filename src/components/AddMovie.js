import React, {useState} from 'react';
import { Button, Modal, Form} from 'react-bootstrap'


export default function AddMovie({movieName, setMovieName}) {

    const [newTitle,setNewTitle] = useState('');
    const [newRate,setNewRate]=  useState('');
    const [newPoster,setNewPoster] = useState('');
    const [newDescription,setNewDescription]= useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NewMovie = () => {
        let newMovie = {
          id : Math.random(),
          title : `${newTitle}`,
          posterURL: `${newPoster}`,
          rating: `${newRate}`,
          description: `${newDescription}`
        };
    
        setMovieName([...movieName,newMovie])
        handleClose()

     }

    return ( 
        <div>
            <button className="btn btn-primary" variant="primary" onClick={handleShow} style={{padding: '10px 30px',fontWeight:'bold'}}>
                Add Movie
            </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Movie Title ..."
                            autoFocus
                            required
                            onChange ={(e) => setNewTitle(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>PosterURL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter URL Poster ..."
                            required
                            onChange ={(e) => setNewPoster(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Movie Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Movie Rating ..."
                            required
                            min="0" max="5"
                            onChange ={(e) => setNewRate(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}
                        onChange ={(e) => setNewDescription(e.target.value)} 
                        required
                        />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={NewMovie}>
                        Save Movie
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}
