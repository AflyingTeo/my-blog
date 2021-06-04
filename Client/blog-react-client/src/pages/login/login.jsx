import React, { useRef, useContext } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
    const userRef = useRef();
    const passRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passRef.current.value,
            })
            dispatch({type: "LOGIN_SUCCES", payload: res.data})
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE"})
        }
    }
    // console.log(user)
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form" onSubmit={loginSubmitHandler}>
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Enter Your User Name!!!"
                    ref={userRef} />
                <label>Pass Word</label>
                <input
                    type="password"
                    placeholder="Enter Your Pass Word!!!"
                    ref={passRef} />
                <button 
                    className="login-btn"
                    disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="login-register-btn" type="submit">
                <Link className="link" to="/register">Register Here</Link>
            </button>
        </div>
    )
}
