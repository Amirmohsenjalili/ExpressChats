import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Image
import logo from '../img/logo.jpeg'

// Style 
import styles from './Login.module.css'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/Users/userActionTypes';

const Login = () => {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('')
    const [ errors, setErrors ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState("")
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.usersState.users);
    const user = data

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
                // const result = await axios.get("http://localhost:3000/users");
                dispatch(fetchUsers())
                var myUser =await data.find( user => user.email === email );
                dispatch({ type: 'SET_USER', payload: myUser });
                
                if (myUser) {
                    navigate('/ChatList');
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        console.log(',,,,,',myUser);
    }
    console.log('//',user);
    
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