import React, { useContext, useState } from 'react';
import './setting.css';
import SideBar from '../../components/sidebar/sidebar';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Setting() {
    const { user, dispatch } = useContext(Context);
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [succes, setSucces] = useState(false);
    const [file, setFile] = useState(null);


    const userUpdateHandler = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        // console.log(1);
        const updateUser = {
            username: username,
            email: email,
            password: password,
            userId: user._id,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updateUser);
            // window.location.replace("/post/" + res.data._id);
            dispatch({ type: "UPDATE_SUCCES", payload: res.data });
            setSucces(!succes);
            setTimeout(() => {
                window.location.replace('/')
            }, 3000);
            // window.location.reload();
        } catch (error) {
            console.log(error)
            dispatch({ type: "UPDATE_FAILURE" });
        }
    }
    const deleteUserhandler = async (e) => {
        // console.log(123)
        try {
            await axios.delete("/users/" + user._id, {
                data: {
                    userId: user._id,
                }
            })
            dispatch({ type: "LOGOUT" });
        } catch (error) {

        }
    }
    return (
        <div className="setting">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title">Update Your Acount</span>
                    <span className="setting-delete-title" onClick={deleteUserhandler}>Delete Your Acount</span>
                </div>
                <form className="setting-form" onSubmit={userUpdateHandler}>
                    <label>Profile Picture </label>
                    <div className="setting-pp">
                        {file ? <img className="setting-pp-img"
                            src={URL.createObjectURL(file)}
                            alt="" />
                            :
                            <img className="setting-pp-img"
                                src={`http://localhost:5000/images/${user.profilePic}`}
                                alt="" />
                        }
                        <label htmlFor="file-input">
                            <i className="setting-img-icon fas fa-user"></i>
                        </label>
                        <input type="file" id="file-input" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    </div>
                    <label>UserName</label>
                    <input type="text"
                        placeholder={user.username}
                        onChange={e => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="text"
                        placeholder={user.email}
                        onChange={e => setEmail(e.target.value)} />
                    <label>PassWord</label>
                    <input type="password"

                        onChange={e => setPassword(e.target.value)} />
                    {succes && <span className="update-succes">Update Succesfully!!!! Waiting....</span>}
                    <button className="setting-update-btn"
                        type="submit"
                    >Save
                    </button>
                </form>
            </div>
            <SideBar />

        </div>
    )
}
