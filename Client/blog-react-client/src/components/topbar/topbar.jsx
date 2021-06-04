import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

export default function Topbar() {
    const {user, dispatch} = useContext(Context);
    const logoutHandler = (e) =>{
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className="top">
            <div className="top-left">
                <i className="top-icon fab fa-facebook-square"></i>
                <i className="top-icon fab fa-instagram"></i>
                <i className="top-icon fab fa-pinterest-square"></i>
                <i className="top-icon fab fa-kickstarter-k"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list--item">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="top-list--item">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="top-list--item">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="top-list--item">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li 
                        className="top-list--item"
                        onClick={logoutHandler}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {user ? (<img className="top-img" 
                                src="" 
                                alt="" />) :
                    (
                        <>
                            <ul className="top-list">
                                <li className="top-list--item">
                                    <Link className="link" to="/login">LOGIN</Link>
                                </li>
                                <li className="top-list--item">
                                    <Link className="link" to="/register">REGISTER</Link>
                                </li>
                            </ul>
                        </>)
                }
                <i className="top-icon fas fa-search"></i>
            </div>
        </div>
    )
}
