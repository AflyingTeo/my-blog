import React, { useState, useEffect } from 'react';
import './singlePost.css';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [singlePost, setSinglePost] = useState([]);
    useEffect(() => {
        const fetchSinglePost = async () => {
            const res = await axios.get(`/posts/${path}`)
            // console.log(res.data)
            setSinglePost(res.data);
        }
        fetchSinglePost()
    }, [path])
    // console.log(singlePost)
    // const { tittle, username, createdAt, desc } = singlePost;
    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <img className="singlepost-img"
                    src={`http://localhost:5000/images/${singlePost.photo}`}
                    alt="" />
                <h1 className="singlepost-title">
                    {singlePost.tittle}
                    <div className="singlepost-edit">
                        <i className="singlepost-icon far fa-trash-alt"></i>
                        <i className="singlepost-icon far fa-edit"></i>
                    </div>
                </h1>
                <div className="singlepost-info">
                    <span className="singlepost-author">Author:
                        <Link className="link" to={`/?user=${singlePost.username}`} >
                            {singlePost.username}
                        </Link>
                    </span>
                    <span className="singlepost-date">{new Date(singlePost.createdAt).toDateString()}</span>
                </div>
                <p className="singlepost-desc">{singlePost.desc}</p>
            </div>
        </div>
    )
}
