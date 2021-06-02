import React from 'react';
import './sidebar.css';

export default function sidebar() {
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
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Fashion</li>
                    <li className="sidebar-list-item">Business</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Sport</li>
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
