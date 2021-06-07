import React, { useState, useEffect, useContext } from 'react';
import './singlePost.css';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [singlePost, setSinglePost] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchSinglePost = async () => {
            const res = await axios.get(`/posts/${path}`)
            // console.log(res.data)
            setSinglePost(res.data);
            setTitle(res.data.tittle);
            setDesc(res.data.desc)
        }
        fetchSinglePost()
    }, [path])

    const deletePostHandler = async (e) => {
        try {
            await axios.delete(`/posts/${path}`,
                {
                    data: {
                        username: user.username,
                    }
                })
        } catch (error) {
            console.log(error)
        }
        window.location.replace('/')
    }
    const singlepostUpdateHandler = async (e) => {
        try {
            await axios.put(`/posts/${path}`,
                {

                    username: user.username,
                    desc: desc,
                    tittle: title,

                })
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
    }
    // console.log(singlePost)
    // const { tittle, username, createdAt, desc } = singlePost;
    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <img className="singlepost-img"
                    src={`http://localhost:5000/images/${singlePost.photo}`}
                    alt="" />
                {updateMode ?
                    <input className="singlepost-title-input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input> :
                    <h1 className="singlepost-title">
                        {singlePost.tittle}
                        {singlePost.username === user.username &&
                            <div className="singlepost-edit">
                                <i className="singlepost-icon far fa-edit" onClick={(e) => setUpdateMode(!updateMode)}></i>
                                <i className="singlepost-icon far fa-trash-alt" onClick={deletePostHandler}> </i>
                            </div>
                        }
                    </h1>
                }
                <div className="singlepost-info">
                    <span className="singlepost-author">Author:
                        <Link className="link" to={`/?user=${singlePost.username}`} >
                            {singlePost.username}
                        </Link>
                    </span>
                    <span className="singlepost-date">{new Date(singlePost.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className="singlepost-desc-input"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} /> :
                    <p className="singlepost-desc">{singlePost.desc}</p>
                }
                {updateMode && <button className="singlepost-update-btn" onClick={singlepostUpdateHandler}>Update</button>}
            </div>
        </div>
    )
}
