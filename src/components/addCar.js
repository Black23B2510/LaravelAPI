
import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';




const Create = () => {
  const [show, setShow] = useState(false);
 
  
  
    const [state, setState] = useState({
        name: "",
        make: "",
        image:""
      });
    
    const handleInputChange = (event) => {
    
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
    }));
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    
    }
     

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a new car
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD A NEW CAR</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Model</Form.Label>
                            <Form.Control name='model' type="text"  value={state.name} onChange ={handleInputChange} placeholder="Enter model" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description'  value={state.make} type="text" onChange ={handleInputChange} placeholder="Enter description" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Produced_on</Form.Label>
                            <Form.Control name='produced_on'  value={state.make} type="date" onChange ={handleInputChange} placeholder="Enter produced_on" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="image" value={state.image}  onChange ={handleInputChange} placeholder="Enter image" />

                        </Form.Group>

                        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">

                            <Button type="submit" className="m-3"  >
                                Add to cart
                            </Button>

                            <Button variant="secondary" className="m-3 ml-5" onClick={handleClose}>
                                Close
                            </Button>
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Create;
