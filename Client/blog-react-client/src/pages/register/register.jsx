import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        setErr(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
        } catch (error) {
            setErr(true)
        }
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <form className="register-form" onSubmit={registerSubmitHandler}>
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Enter Your User Name!!!"
                    onChange={e => setUsername(e.target.value)} />
                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter Your Email!!!"
                    onChange={e => setEmail(e.target.value)} />
                <label>Pass Word</label>
                <input
                    type="password"
                    placeholder="Enter Your Pass Word!!!"
                    onChange={e => setPassword(e.target.value)} />
                <button className="register-btn">Register</button>
            </form>
            <button
                className="register-register-btn"
                type="submit">
                <Link className="link" to="/login">Login Here</Link>
            </button>
            {err && <span className="error">Some thing went wrong!!!!!</span>}
        </div>
    )
}
