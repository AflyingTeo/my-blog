import React from 'react';
import './header.css';

export default function header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-titles-sm">Welcome To My Blog</span>
                {/* <span className="header-titles-lg">Blog</span> */}
            </div>
            <img className="header-img"
                src="http://localhost:5000/images/header.png"
                alt="" />
        </div>
    )
}
