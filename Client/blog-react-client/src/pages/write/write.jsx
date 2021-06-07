import React, { useContext, useState } from 'react';
import './write.css';
import { Context } from '../../context/Context';
import axios from 'axios'

export default function Write() {
    const [file, setFile] = useState(null);
    const [tittle, setTittle] = useState('');
    const [desc, setDesc] = useState('');
    const { user } = useContext(Context);

    console.log(user.username)
    // console.log(JSON.parse(user))
    const writeSubmitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            desc: desc,
            tittle: tittle,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const res = await axios.post("/posts/create", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="write">
            {file &&
                <img className="write-img"
                    src={URL.createObjectURL(file)}
                    alt="" />
            }
            <form className="write-form" onSubmit={writeSubmitHandler}>
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        style={{ display: "none" }}
                        onChange={e => setFile(e.target.files[0])} />
                    <input
                        className="write-input"
                        type="text"
                        placeholder="Input Title Here"
                        autoFocus={true}
                        onChange={e => setTittle(e.target.value)} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Tell your story ...."
                        type="text"
                        className="write-input write-text"
                        onChange={e => setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="write-submit" type="submit">Publish</button>
            </form>
        </div>
    )
}
