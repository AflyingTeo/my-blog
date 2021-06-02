import React from 'react';
import './write.css';

export default function write() {
    return (
        <div className="write">
            <img className="write-img" 
                src="" 
                alt="" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="file-input" style={{display: "none"}}/>
                    <input className="write-input" type="text" placeholder="Input Title Here" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Tell your story ...." 
                        type="text" 
                        className="write-input write-text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}
