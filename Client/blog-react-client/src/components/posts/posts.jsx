import React from 'react';
import './posts.css';
import Post from '../post/post';

export default function posts({ posts }) {
    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post key={index.toString()} post={post}/>
            ))}
        </div>
    )
}
