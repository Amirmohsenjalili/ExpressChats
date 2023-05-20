import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//component
import NavbarPage from './Navbar';

// redux
import { useSelector, useDispatch  } from 'react-redux';
// import { fetchUsers } from '../redux/Users/userActionTypes';

const ProfilePage = () => {

  // const test = useSelector((state) => state);
  // console.log(test)

  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const [sendStatus, setSendStatus] = useState(false);

  // const dispatch = useDispatch();
  const data = useSelector(state => state.usersState.users);
  const userData = data
  console.log(userData);
  // const[chang, setChang] = useState

    // useEffect(() => {
    //   dispatch(fetchUsers())
    //   //   const fetchData = async () => {
    //   //     try {
    //   //       const response = await axios.get('http://localhost:3000/users/1');
    //   //       setUser(response.data);
    //   //     } catch (error) {
    //   //       console.error(error);
    //   //     }
    //   //   };
    
    //   //   fetchData();
    //   // }, [sendStatus]);
    // }, [sendStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
    
  };
  
  const handleImgChange = (e) => {
    const { avatar, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      avatar: value
    }));
    
  
  
    console.log(avatar);
    console.log(value);
    console.log('chang');
  }

  const handleEdit = () => {
    setEditMode(true);
  };

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
                  <Card.Img variant="top" src={userData.avatar}/>
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
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      value={userData.surname}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={userData.mobile}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSave} className='mt-4'>
                    Save
                  </Button>
                </Form>
              ) : (
                <Card style={{ width: '22rem'}} className='mb-5'>
                <Card.Img variant="top" src={userData.avatar} />
                <Card.Body>
                  <Card.Title>{userData.name} {userData.surname}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{userData.email}</ListGroup.Item>
                  <ListGroup.Item>{userData.mobile}</ListGroup.Item>
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