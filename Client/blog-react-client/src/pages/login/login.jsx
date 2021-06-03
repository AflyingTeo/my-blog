import React from 'react';
import './login.css';

export default function login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form">
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email!!!" />
                <label>Pass Word</label>
                <input type="password" placeholder="Enter Your Pass Word!!!"/>
                <button className="login-btn">Login</button>
            </form>
            <button className="login-register-btn">Register Here</button>
        </div>
    )
}
