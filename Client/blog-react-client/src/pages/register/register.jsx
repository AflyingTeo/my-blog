import React from 'react';
import './register.css';

export default function register() {
    return (
        <div className="register">
            <h1>Register</h1>
            <form className="register-form">
                <label>User Name</label>
                <input type="text" placeholder="Enter Your User Name!!!" />
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email!!!" />
                <label>Pass Word</label>
                <input type="password" placeholder="Enter Your Pass Word!!!" />
                <button className="register-btn">Register</button>
            </form>
            <button className="register-register-btn">Login Here</button>
        </div>
    )
}
