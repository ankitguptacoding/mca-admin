import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { sideMenu } from '../../helper';
import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = (props) => {
  const { isOpenBar } = props;
  const [sideMenuBar, setSideBarMenu] = useState(sideMenu);

  const handleActive = (index) => {
    const updatedMenu = sideMenuBar.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setSideBarMenu(updatedMenu);
  };

  return (
    <div className="container">
      <div className='sidebar' style={{ width: isOpenBar ? "270px" : "50px" }}>
        {sideMenuBar.map((item, index) => (
          <Link
            to={item.route}
            key={index}
            className={`link ${item.active ? "active" : ""}`}
            onClick={() => handleActive(index)}
          >
            <div className='icon'>{item.icon}</div>
            <div className='link_text' style={{ display: isOpenBar ? "block" : "none" }}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <main>{props.children}</main>
    </div>
  );
};

export default Sidebar;
