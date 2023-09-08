import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "../styles/userPosts.css";
import { successNote, warningNote} from '../components/toast';

const UserBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://blogging-website-server.onrender.com/api/v1/post/userPosts");
        setPosts(response.data.posts);
        // console.log(response.data.posts)
      } catch (error) {
        // console.error("Error fetching posts:", error);
        warningNote();
      }
    };

    fetchPosts();
  }, []);
  // console.log(posts);

  const handleDelete = (postId) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');

    if (confirmDelete) {
      axios.delete(`https://blogging-website-server.onrender.com/api/v1/post/deletePost/${postId}`);
      // window.location.reload();
      successNote("Deleted successfully");
    }
  };

  return (
    <div className='posts-box'>
      { posts.map(post => (
        <div className="col-lg-5 col-md-10 col-sm-12 post-box" key={post._id}>
          <div className="" style={{ height: "100%" }}>
          <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="50%"
              role="img"
              aria-label="Placeholder: Thumbnail"
              focusable="false"
            >
              <title>Placeholder</title>
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                xlinkHref={`https://blogging-website-server.onrender.com/api/v1/post/post-photo/${post._id}`}
                alt={post.category}
              />
              <text x="40%" y="50%" fill="#eceeef">
                {post.category}
              </text>
            </svg>
            <div className="" style={{ height: "38%"}}>
              <h4 className='card-title'>{post.title}</h4>  
              <div className='small-text'>
                <small className="text-body-secondary">{post.date}</small> 
                <small className="text-body-secondary">By: {post.author}</small>
              </div>
              <div style={{textAlign:"justify"}}>
                <p className="card-text" >{post.content.slice(0,150)}...</p>
              </div>
            </div>
            <div className='post-btn' style={{marginTop:"5px"}}>
              <Link to={`/blog/${post._id}`} style={{ textDecoration: "none" }} exact>
                Read more...
              </Link>
              <button onClick={() => handleDelete(post._id)} className="delete-btn">
                    Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserBlogs;
