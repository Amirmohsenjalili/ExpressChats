import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//component
import TextLinkExample from './Navbar';

const ProfilePage = () => {


  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/users');
            setUser(response.data[0]);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Perform save operation, e.g., send updated user data to the server
    setEditMode(false);
  };

  return (
    <div>
      <TextLinkExample />
      {user && 
        <Container>
          <div className='mt-4 d-flex justify-content-center'>
            <div>
              {editMode ? (
                <Form style={{ width: '30rem' }}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      value={user.surname}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={user.mobile}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSave} className='mt-4'>
                    Save
                  </Button>
                </Form>
              ) : (
                <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                  <Card.Title>{user.name} {user.surname}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{user.email}</ListGroup.Item>
                  <ListGroup.Item>{user.mobile}</ListGroup.Item>
                 <Button variant="secondary" onClick={handleEdit}>     Edit   </Button>
                </ListGroup>
              </Card>
              )}
            </div>
          </div>
        </Container>}
    </div>
  );
};

export default ProfilePage;