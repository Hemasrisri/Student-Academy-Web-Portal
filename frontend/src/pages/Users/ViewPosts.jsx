import React, { useEffect, useState } from 'react';
import AxiosAPI from '../api/AxiosAPI';

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await AxiosAPI.get('/post');
        if (res.data.success) {
          setPosts(res.data.Post);
        } else {
          console.error('Failed to fetch posts:', res.data.msg);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">POSTS</h1>
      {posts.map((item) => (
        <article className="mt-12 rounded-lg border border-gray-100 bg-white shadow-sm" key={item.id}>
          <img
            alt=""
            src={item.photo} // Assuming the photo URL is available in the 'photo' field
            className="h-56 w-full object-cover"
          />
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ViewPosts;
