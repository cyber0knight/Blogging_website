import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./styles/Header.css"
import { useAuth } from '../context/auth';

const Header = () => {
  const [auth, setAuth] = useAuth();
    const handleLogout = (e) => {
      e.preventDefault();
      setAuth({
        ...auth, 
        user:null, 
        token: ''
      })
      localStorage.removeItem('auth');
    };
  return (
    < >
      <div className="navbar">
        <div className="contain">
          <Link className="h2" to="/profile">Blogging Hub</Link>
          {/* <form className="d-flex col-md-4 "> 
            <input className="form-control search" type="search" placeholder="Search" aria-label="Search" />
          </form> */}
          <div className='links'>
            <NavLink exact to="/" className='link'>Home</NavLink>
            
            <NavLink to="/" onClick={handleLogout} className='link'>LogOut</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;