import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import Signify from "./pages/Auth/signify.js";
import MainPage from "./pages/MainPage.js";
import { useAuth } from "./context/auth.js";
import Profile from "./pages/Profile.js";
import ReadBlog from "./pages/ReadBlog.js";
import CreateBlog from "./pages/CreateBlog.js";

function App() {
  const [auth] = useAuth(); 
  return (
    <>
    <Routes>
      <Route path="/" element={!auth.user? <HomePage /> : <MainPage />} />
      <Route path="/register" element={<Signify  param="register"/>} />
      <Route path="/login" element={<Signify param="login" />}/>
      <Route path="/profile" element={auth.user? <Profile />  : <HomePage />} />
      <Route path="/blog/:pid" element={auth.user? <ReadBlog />  : <HomePage />} />
      <Route path="/createBlog" element={auth.user? <CreateBlog />  : <HomePage />} />
    </Routes>
    </>
  );
}

export default App;
