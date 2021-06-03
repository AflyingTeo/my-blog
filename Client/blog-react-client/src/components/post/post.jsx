import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

export default function post({ post }) {
    console.log(post)
    const {tittle, desc, createdAt, categories, _id} = post;
    return (
        <div className="post">
            <img className="post-img"
                src=""
                alt="" />
            <div className="post-info">
                <div className="post-cats">
                    {categories.map(cat =>(
                        <span className="post-cat">cat.name</span>
                    ))}
                </div>
                <span className="post-title">{tittle}</span>
                <hr />
                <span className="post-date">{new Date(createdAt).toDateString()}</span>
            </div>
            <p className="post-desc">{desc}</p>
            <div className="post-view-detail">
                <Link className="link" to={`/post/${_id}`}>View Posts...</Link>
            </div>
        </div>
    )
}
