import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FaBars} from 'react-icons/fa';
import { IoMdLogIn } from "react-icons/io";
const Navbar = (props) => {
  const {isOpenBar, toggle} = props;
  return (
    <div >
    <nav>
        <div className='top_section'>
          <h1 className='logo' style={{display: isOpenBar? "block": "none", marginLeft: isOpenBar? "5px": "0px"}}>MCA Admin</h1>
          <div className='bars' style={{marginLeft: isOpenBar? "15px": "4px"}}>
            <FaBars onClick={toggle}/>
          </div>
        </div>
      <ul >
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login"><IoMdLogIn /></Link></li>
      </ul>
    </nav>
      <div className='childern'>{props.children}</div>
    </div>
    
    
  );
};

export default Navbar;
