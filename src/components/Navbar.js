import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// style
import styles from './Navbar.module.css'

// React-Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

// Icon
import Icon from '../img/logo.jpeg';

//redux
import { useSelector } from 'react-redux';

function NavbarPage() {

  const [user, setUser] = useState(null);
  const data = useSelector(state => state.usersState.myUser);

  useEffect(() => {
    setUser(data)
  }, []);
  
  
  return (
    <Navbar className={styles.Nv}>
      <Container>
      <img
              src={Icon}
              width="50"
              height="50"
              className={styles.Icon}
              alt="Express Chat logo" 
            />
      <Navbar.Brand><Link to="/ChatList" className={styles.Link}>ChatList</Link></Navbar.Brand>
      <Navbar.Brand><Link to="/Profile" className={styles.Link}>Profile</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user && <Navbar.Text>
              <Image src={user.avatar} className={styles.Image}/>
              Signed in as:<Link to='/profile' className={styles.Link}> {user.name} {user.surname} </Link>
              <Link to='/' className={styles.Link}>SIGN OUT</Link>
          </Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;


      // import axios from 'axios';
      // useEffect(() => {
        
      //     const fetchData = async () => {
      //       try {
      //         const response = await axios.get('http://localhost:3000/users/1');
      //         setUser(response.data);
      //       } catch (error) {
      //         console.error(error);
      //       }
      //     };
          
      //     fetchData();
      //   }, []);