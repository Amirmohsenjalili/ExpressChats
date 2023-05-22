import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//component
import NavbarPage from './Navbar';

// redux
import { useSelector } from 'react-redux';

const ProfilePage = () => {

  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const [sendStatus, setSendStatus] = useState(false);

  const data = useSelector(state => state.usersState.myUser);
  const userData = data

    useEffect(() => {
      setUser(userData)
    }, [sendStatus]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, [user]);
  
  const handleImgChange = useCallback((e) => {
    const { avatar, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      avatar: value
    }));
    //fix the error
    console.log(avatar);
  }, [user])

  const handleEdit = useCallback(() => {
    setEditMode(true);
  }, [editMode]);

  const handleSave = async() => {
      try {
      await axios.patch("http://localhost:3000/users/1", user);
      setSendStatus(true)
    } catch(error) {
      console.log(error);
    }  
    setEditMode(false);
  };

  return (
    <div>
      <NavbarPage />
      {user && 
        <Container>
          <div className='mt-4 mb-4 d-flex justify-content-center'>
            <div>
              {editMode ? (
                <Form style={{ width: '30rem' }}>
                  <Card.Img variant="top" src={user.avatar}/>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="file"
                      name="avatar"
                      value={''}
                      onChange={handleImgChange}
                      className='mt-1 mb-3'
                    />
                  </Form.Group>
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
                <Card style={{ width: '22rem'}} className='mb-5'>
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

export default React.memo(ProfilePage);