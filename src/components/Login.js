import React from 'react';

// Style 
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to ExpressChat!</h2>
                <label> Email: 
                <input placeholder='Please Enter Your Email'/>
                </label>
                <div className={styles.button}>
                    <button>Login</button>Login
                </div>
            </div>
        </div>
    );
};

export default Login;