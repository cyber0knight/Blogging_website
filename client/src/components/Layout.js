import React from 'react';
import Header from "./Header";
import { Helmet } from "react-helmet";
// import { successNote, warningNote } from './toast';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Footer from './footer';
import "./styles/Layout.css"

const Layout = ({ children, title, description, keywords, author }) => {
    return (
      <div className='layout'>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header style={{ minHeight: "10vh" }}/>
        <main style={{ minHeight: "80vh" }}>
            <ToastContainer />
          {children}
        </main>
          {/* <Footer /> */}
      </div>
    );
  };
  
  Layout.defaultProps = {
    title: "Blogging",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "IssacMukara",
  };
  
  export default Layout;