import React, { useEffect, useState } from 'react';

import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sidebar';
import axios from 'axios';
import './home.css';
import { useLocation } from 'react-router';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation()
    // console.log(search)
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <SideBar />
            </div>
        </>
    )
}

export default Home;
