import React from 'react';
import './topbar.css';

export default function topbar() {
    return (
        <div className="top">
            <div className="top-left"><i className="top-icon fab fa-kickstarter-k"></i></div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list--item">HOME</li>
                    <li className="top-list--item">ABOUT</li>
                    <li className="top-list--item">CONTECT</li>
                    <li className="top-list--item">LOGOUT</li>
                </ul>
            </div>
            <div className="top-right">
                <img className="top-img" src="" alt="" />
                <i className="top-icon fab fa-searchengin"></i>
            </div>
        </div>
    )
}
