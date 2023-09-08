import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/auth';
import { usePhoto } from '../context/photo';
import UserBlogs from './UserPosts';
import axios from 'axios';
import "../styles/Profile.css";
import { successNote, warningNote } from '../components/toast';
import {Link} from "react-router-dom";



const Profile = () => {
  const [auth] = useAuth();
  const userPhoto = usePhoto();


  const handleCreate = async (photoData) => {
    try {
      const userId = auth.user._id;
  
      const { data } = await axios.post(`https://blogging-website-server.onrender.com/api/v1/photo/createPhoto/${userId}`, photoData);
  
      if (data?.success) {
        successNote(data?.message);
      } else {
        // Handle the success case here
        warningNote();
      }
      // window.location.reload();
    } catch (error) {
      // console.error(error);
      // Handle the error case here
      warningNote();
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
  
    const photoData = new FormData();
    photoData.append("image", file); // Attach the selected image to FormData
  
    // Pass the FormData to handleCreate
    handleCreate(photoData);
  };

  return (
    <Layout title={"Profile page"}>
        <div className='profile' style={{
          position: 'fixed',
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(120deg,#fff 70%,rgb(119, 157, 231) 100%)',
          zIndex: -1, // Set z-index to place it behind other content
        }}>
          {/* Empty div for the profile background */}
        </div>
      <div className='user-profile' style={{ minHeight: "100vh" }}>
        <div className='dash-board'>
          <label htmlFor="photoInput" style={{ cursor: "pointer" }}>
            {userPhoto ? (
              <img
                src={`https://blogging-website-server.onrender.com/api/v1/photo/getPhoto/${auth.user._id}`}
                className="card-img-top"
                alt="user"
              />
            ) : (
              <img src="/images/default_image.png" className="card-img-top" alt='default' />
            )}
            <input
              id="photoInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </label>
          <h1>{auth.user.userName}</h1>
          <div className='dash-box'>
            <Link to="/createBlog">Create a Blog</Link>
          </div>
        </div>
        <div className='userPosts'>
          <h2>
            Blogs
          </h2>
          <UserBlogs />
        </div>
      </div>
      <div className='p-side-panel'>
        <div className='psp-box'>
          <h2>
            under work
          </h2>
        </div>
      </div>
      
    </Layout>
  )
}

export default Profile;
