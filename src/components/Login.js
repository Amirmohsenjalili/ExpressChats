import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Image
import logo from '../img/logo.jpeg'

// Style 
import styles from './Login.module.css'

//redux
// import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('')
    // const dispatch = useDispatch();
    const [ errors, setErrors ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState("")

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async() => {
        if (email === ""){
            setErrorMsg("Email required")
            setErrors(true)
        } else if ( !/\S+@\S+\.\S+/.test(email)) {
            setErrors(true)
            setErrorMsg("Email is not valid")

        } else {
            
            
            try {
                const result = await axios.get("http://localhost:3000/users");
                const myUser = result.data.find( user => user.email === email );
                // dispatch({ type: 'SET_USER', payload: myUser });
                if (myUser) {
                    navigate('/ChatList');
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
        
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to ExpressChat!</h2>
                <img src={logo} alt='logo' />
                <label> Email: 
                <input placeholder='Please Enter Your Email' type='email' onChange={getEmail} value={email} />
                
                
                </label>
                {errors && <span className={styles.span}>{errorMsg}</span>}

                <div>
                    <button onClick={submitEmail} className={styles.button}>Login</button>
                </div>
            </div>
             
        </div>
    );
};

export default Login;