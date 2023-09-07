 import React, {useState} from 'react';
import Layout from '../components/Layout';
import "../styles/MainPage.css"
import SidePanel from './SidePanel';
import RightSidePanel from './RightSidePanel';
import Blogs from './blogs';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for the arrow icon
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon

 const MainPage = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const toggleClick = () => {
    setIsToggleActive(!isToggleActive);
  }
   return (
    <Layout title={"Creative Blogging"}>
        <div className='main'>
        <div
          className={` ${isToggleActive ? 'SP sp-active' : 'SP sp-inactive'}`}
        >
          <SidePanel />
        </div>
            <div className={`mainContent `}>
              <h1>Blog Library</h1>
              <div className='toggle-btn' onClick={toggleClick}>
                <div
                  className={`toggleBox ${isToggleActive ? 'active' : ''}`} 
                >
                  <span className="icon"></span>
                </div>
              </div>
              <Blogs />
            </div>
          <RightSidePanel className="RSP" />
        </div>
     </Layout>
   );
   
 };
 export default MainPage;