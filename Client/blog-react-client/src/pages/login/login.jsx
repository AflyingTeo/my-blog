import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

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
            <button className="login-register-btn">
                <Link className="link" to="/register">Register Here</Link>
            </button>
        </div>
    )
}
