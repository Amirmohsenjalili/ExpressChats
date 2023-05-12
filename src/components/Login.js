import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Image
import logo from '../img/logo.jpeg'

// Style 
import styles from './Login.module.css'

//redux
import { useDispatch, useSelector } from 'react-redux';
// import { setData } from '../redux/Users/usersAction';

//valiDate
import { ValiDate } from './ValiDate';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('')
    const [ errors, setErrors ] = useState ({})
    useEffect(() => {
        setErrors(ValiDate(email))
    }, [email])

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async() => {
        try {
            const result = await axios.get("http://localhost:3000/users");
            const myUser = result.data.find( user => user.email === email );
            // dispatch(setData(myUser));
            if (myUser) {
                navigate('/ChatList');
            } else {
                console.log("Email required");
                // setErrors("Email required")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.loginPage}>
            {/* { email &&  */}
            <div className={styles.loginCard}>
                <h2>Welcome to ExpressChat!</h2>
                <img src={logo} alt='logo' />
                <label> Email: 
                <input placeholder='Please Enter Your Email' type='email' onChange={getEmail} value={email}/>
                {/* {errors.email && <span>{errors.email}</span>} */}
                {/* {errors && errors} */}
                </label>

                <div>
                    <button onClick={submitEmail} className={styles.button}>Login</button>
                </div>
            </div>
            {/* } */}
        </div>
    );
};

export default Login;