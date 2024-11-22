import React, { useState } from 'react';
import AxiosAPI from '../api/AxiosAPI';
import { toast } from 'react-toastify';

const Post = () => {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const user = JSON.parse(sessionStorage.getItem("user"));

    const handleImage = (e) => {
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", file);
        formData.append("userId", user.id);
        formData.append("title", e.target.title.value);
        formData.append("description", e.target.description.value);

        try {
            const res = await AxiosAPI.post('post', formData);
            toast.success(res.data?.msg);
            console.log(res.data, `post res`);
        } catch (error) {
            toast.error("Failed to post. " + error.message);
            console.log(error);
        }
    };

    return (
        <div>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
                New Post
            </div>
            <form onSubmit={handleSubmitPost} className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" name="title" placeholder="Title" type="text" />
                <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" name="description" placeholder="Describe everything about this post here" defaultValue={""} />
                <div className="icons flex text-gray-500 m-2">
                    <label className="cursor-pointer hover:text-gray-700">
                        <svg className="mr-2 p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={30}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        <input type="file" onChange={handleImage} className="hidden" />
                    </label>
                    {image && <img src={image} className="w-24" alt="Preview" />}
                </div>
                <div className="buttons flex">
                    <button type="submit" className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-auto bg-indigo-500">
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Post;
