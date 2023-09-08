import React, {useState} from 'react';
import Layout from '../components/Layout';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { successNote, warningNote } from '../components/toast';
import "../styles/createBlog.css";
const CreateBlog = () => {

    // const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [photo, setPhoto] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();
        try{
            const postData = new FormData();
            postData.append("title", title);
            postData.append("author",author);
            postData.append("category",category);
            postData.append("photo",photo);
            postData.append("content",content);
            const { data } = axios.post(
                "https://blogging-website-server.onrender.com/api/v1/post/create-post",
                postData
              );
            if(data?.success){
                
                warningNote();
            }else{
                successNote(data?.message);
                // navigate("/");
            }
        }catch(error){
            // console.log(error);
            warningNote();
        }
    }

    return (
        <Layout title={"Create a Blog"}>
         <div className="create-blog container-fluid m-3 p-3" style={{ minHeight: '100vh' }}>
        <h2>Create a Blog</h2>
        <form onSubmit={handleCreate}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Blog
          </button>
        </form>
      </div>
        </Layout>
    )
}

export default CreateBlog;
