import React, { useEffect, useState } from 'react';
import './single.css';
import Sidebar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/singlepost/SinglePost';

export default function Single() {
    
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar />
        </div>
    )
}
