import React from 'react';
import './setting.css';
import SideBar from '../../components/sidebar/sidebar';

export default function setting() {
    return (
        <div className="setting">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title">Update Your Acount</span>
                    <span className="setting-delete-title">Delete Your Acount</span>
                </div>
                <form className="setting-form">
                    <label>Profile Picture </label>
                    <div className="setting-pp">
                        <img className="setting-pp-img"
                            src=""
                            alt="" />
                        <label htmlFor="file-input">
                            <i className="setting-img-icon fas fa-user"></i>
                        </label>
                        <input type="file" id="file-input" style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Teo Bay Bong" />
                    <label>Email</label>
                    <input type="text" placeholder="anhpham.96.k@gmail.com" />
                    <label>PassWord</label>
                    <input type="password" />
                    <button className="setting-update-btn">Save</button>
                </form>
            </div>
            <SideBar />

        </div>
    )
}
