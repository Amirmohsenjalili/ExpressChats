import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React-Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'




function TextLinkExample() {

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

  return (
    <Navbar style={{ boxShadow:'0px 5px 5px gray' ,height:'5rem' ,backgroundColor:'#94AF9F'}}>
      <Container>
      <Navbar.Brand href="ChatList">ChatList</Navbar.Brand>
      <Navbar.Brand href="/Profile">Profile</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user && <Navbar.Text>
              <Image src={user.avatar} style={{ width:'50px' ,borderRadius:'50%'}} className='me-2'/>
              Signed in as:<a href='/profile'> {user.name} {user.surname} </a>
              <a href='/' className='ms-3 '>SIGN OUT</a>
          </Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;