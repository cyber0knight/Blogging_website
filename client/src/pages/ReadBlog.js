import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ReadBlog.css';
import { warningNote } from '../components/toast';

const ReadBlog = () => {
  const { pid } = useParams();
  // console.log(pid);
  const [post, setPost] = useState({}); // Initialize post as an object

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://blogging-website-server.onrender.com/api/v1/post/getPostById/${pid}`);
        setPost(response.data.post);
        // console.log(response.data.post);
      } catch (error) {
        // console.error('Error fetching posts:', error);
        warningNote();
      }
    };
    fetchPosts();
  }, [pid]);

  const renderContent = () => {
    if (!post || !post.content) return null; // Check if post or content is undefined

    const contentArray = post.content.split('\n\n'); // Split on double line breaks

    return contentArray.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
  };

  return (
    <Layout title={'BlogPage'}>
      <div className="read-blog" style={{ minHeight: '100vh' }}>
        <div className="rb-content">
          <div className="rb-img">
            {post._id ? ( // Add conditional check for post._id
              <img
                src={`/api/v1/post/post-photo/${post._id}`}
                className="card-img-top"
                alt="user"
              />
            ) : (
              <div className="placeholder-image">Placeholder Image</div>
            )}
          </div>
          <div className="rb-text">
            <h1>{post.title}</h1>
          </div>
          <div className="read-blog" style={{ minHeight: '100vh' }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReadBlog;
