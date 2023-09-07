import React from "react";
import { useAuth } from "../context/auth";
import { usePhoto } from "../context/photo";
// import axios from "axios";
import "../styles/SidePanel.css";

const SidePanel = () => {
  const [auth] = useAuth();
  const userPhoto = usePhoto();
  return (
    <div className="SP">
      <div className="sp-user">
        {userPhoto ? (
          <img
            src={`/api/v1/photo/getPhoto/${auth.user._id}`}
            alt="user"
          />
        ) : (
          <img
            src="/images/default_image.png"
            className="card-img-top"
            alt="default"
          />
        )}
        <h2>{auth.user.userName}</h2>
      </div>
      <div className="sp-btn">
          <a href="/profile">Profile-page</a>
          <a href="/createBlog">Blogging-page</a>
          <a href="https://issacmukaraportfolio.netlify.app/">About-Me</a>
          <a href="mailto:issacmukara@gmail.com">Contact Me</a>
      </div>
      <div className="sp-footer">
          <h5>Crafted By Issac Mukara</h5>
      </div>
    </div>
  );
};

export default SidePanel;
