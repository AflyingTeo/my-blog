import React from 'react';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sidebar';
import './home.css';

export default function home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    )
}
