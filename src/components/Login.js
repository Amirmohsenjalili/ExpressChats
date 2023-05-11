import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// Image
import logo from '../img/logo.jpeg'

// Style 
import styles from './Login.module.css'

//redux
import { useDispatch } from 'react-redux';
import { setData } from '../redux/Users/usersAction';


const Login = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('')

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async() => {
        try {
            const result = await axios.get("http://localhost:3000/users");
            const myUser = result.data.find( user => user.email === email );
            dispatch(setData(myUser));
            if (myUser) {
                // history.push('/ChatList');
                console.log("true");
            } else {
                console.log("false");
            }
            console.log(myUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to ExpressChat!</h2>
                <img src={logo} alt='logo' />
                <label> Email: 
                <input placeholder='Please Enter Your Email' type='email' onChange={getEmail} value={email}/>
                </label>
                <div>
                    <button onClick={submitEmail} className={styles.button}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;