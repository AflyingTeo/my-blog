import React, { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            // console.log(res.data)
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img className="sidebar-img" src="" alt="" />
                <p>Hello</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    {cats.map((cat, index) => (
                        <Link className="link" key={index.toString()} to={`/?cat=${cat.name}`}>
                            <li className="sidebar-list-item" key={index.toString()}>{cat.name}</li>
                        </Link>
                    ))}
                    {/* <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Fashion</li>
                    <li className="sidebar-list-item">Business</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Sport</li> */}
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-social">
                    <i className="sidebar-icon fab fa-facebook-square"></i>
                    <i className="sidebar-icon fab fa-instagram"></i>
                    <i className="sidebar-icon fab fa-pinterest-square"></i>
                    <i className="sidebar-icon fab fa-kickstarter-k"></i>
                </div>
            </div>
        </div>
    )
}
