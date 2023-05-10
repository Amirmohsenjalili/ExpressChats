import React from 'react';

// React-Bootstrap:
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar style={{ boxShadow:'0px 5px 5px gray' ,height:'5rem' ,backgroundColor:'#94AF9F'}}>
      <Container>
      <Navbar.Brand href="ChatRoom">ChatRoom</Navbar.Brand>
      <Navbar.Brand href="/Profile">Profile</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;