import React, { useState } from 'react';
import axios from 'axios';

// Style 
import styles from './Login.module.css'

const Login = () => {

    const [ email, setEmail ] = useState('')

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async() => {
        try {
            const result = await axios.get("http://localhost:3000/users");
            const myUser = result.data.find( user => user.email === email );
            console.log(myUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to ExpressChat!</h2>
                <label> Email: 
                <input placeholder='Please Enter Your Email' type='email' onChange={getEmail} value={email}/>
                </label>
                <div className={styles.button}>
                    <button onClick={submitEmail}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;