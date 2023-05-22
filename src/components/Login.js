import React, { useState, useRef, useEffect } from 'react';
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
    
    const input = useRef(null);
    useEffect(() => {
        input.current.focus()
    }, [])
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.usersState.users);
    const getEmail = async(e) => {
        setEmail(e.target.value)
        await dispatch(fetchUsers())
    }
    
    const submitEmail = () => {
        if (email === ""){
            setErrorMsg("Email required")
            setErrors(true)
        } else if ( !/\S+@\S+\.\S+/.test(email)) {
            setErrors(true)
            setErrorMsg("Email is not valid") 
        } else {
            try {
                var myUser = data.find( user => user.email === email );
                dispatch({
                    type: "SET_LOGIN_USER",
                    payload: myUser
                })
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
                <input placeholder='Please Enter Your Email' type='email' onChange={getEmail} value={email} ref={input} />
                
                
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