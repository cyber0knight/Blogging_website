import React from "react";
import "../styles/Homepage.css";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
    return (
      <>
      <div className="HomePage">
        <navbar>
          <h2 className="logo">Issac Mukara</h2>
          <nav className="navigation">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Get Started
            </NavLink>
          </nav>
        </navbar>
        <div className="home home1">
          <div className="cont">
            <div className="box box1">
            <p>Journey through stories, each keystroke capturing moments,<br/> and framing cherished thoughts</p>
            </div>
            <div className="box box2">
              <p>Stand out with style <br/>Themes and Patterns</p>
            </div> 
            <Link to="/register" exact className="nav-link"
                      role="button">
              Get Started
            </Link>
          </div>
          <div className="greeting">
            <h4>I am glad you are here</h4>
            <h4>you can scroll down</h4>
          </div>
          
        </div>

        <div className="home home2">
            
          <div className="cont2">
          <img className="img1" src="/images/sky.jpg" alt="sky" height="250px" width="450px" />
          <img className="img2" src="/images/farming.jpg" alt="sky" height="250px" width="450px" />
          <img className="img3" src="/images/trees.jpg" alt="sky" height="250px" width="450px" />
          <img className="img4" src="/images/designing.jpg" alt="sky" height="250px" width="450px" />
          <img className="img5" src="/images/mountain.jpg" alt="sky" height="250px" width="450px" />
          <img className="img6" src="/images/travelling.jpg" alt="sky" height="250px" width="450px" />
          </div>
        </div>
        </div>
      </>
    );
}

export default Home;