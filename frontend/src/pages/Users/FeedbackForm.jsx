import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AxiosAPI from '../api/AxiosAPI';
import { toast } from 'react-toastify';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [text, setText] = useState('');
    const { state } = useLocation();
    const user = JSON.parse(sessionStorage.getItem("user"));

    const sendFeedback = async () => {
        try {
            const res = await AxiosAPI.post(`feedback`, {
                senderId: user.id,
                receiverId: state.id,
                rating: rating,
                description: text
            });
            console.log(res);
            toast.success(res.data?.msg);
        } catch (error) {
            toast.error("Error occurred while submitting the feedback");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <div className="lg:mx-72">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <div className="lg:max-w-md mx-auto">
                            <h3 className='text-center text-2xl'>{state?.name}</h3>
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <button
                                            key={index}
                                            className="star"
                                            onClick={() => setRating(starValue)}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(rating)}
                                        >
                                            <svg className="w-8 h-8" fill={starValue <= (hover || rating) ? "#FFD700" : "none"} stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.541 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.786.57-1.841-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.963 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                            </svg>
                                        </button>
                                    );
                                })}
                            </div>
                            <textarea className="form-textarea mt-1 block lg:w-80 sm:w-auto border rounded-md" rows="5" placeholder="Your feedback..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
                            <button className="mt-4 ml-24 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in-out duration-150" type="button" onClick={sendFeedback}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
