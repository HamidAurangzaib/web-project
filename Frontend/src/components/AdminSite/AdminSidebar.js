import React, { useState, useEffect } from 'react';
import './adminsidebar.css';
import image from '../images/hamid.jpeg';
import TopLayout from './TopLayout';
import AdminNavbar from './AdminNavbar';
import Adduser from './Adduser';
import Userslist from './Userslist';
import Updateuser from './Updateuser';
import Deleteuser from './Deleteuser';
import MyCards from './MyCards';

const AdminSidebar = () => {
  const [activeOption, setActiveOption] = useState('dashboard'); // Default active option

  const handleMenuClick = (option, event) => {
    event.preventDefault();
    setActiveOption(option);
  };

  // Use useEffect to set the active option on component mount
  useEffect(() => {
    const currentPath = window.location.pathname;
    const option = currentPath.substring(1); // Remove the leading '/'
    setActiveOption(option || 'dashboard'); // Set the active option based on the current path
  }, []); // Empty dependency array means this effect runs once on component mount

  const Sidebar = () => {
    return (
      
      <div className="container-fluid">
       
        <div className="row">
        
          <div className="col-md-12 col-lg-6 sidebar " style={{width:"300px"}}>
            <div className="sidebar-header">
              <img className='img-fluid rounded-circle' src={image} style={{ width: "100px", height: "100px" }} alt="Description" />
              <h4 className="heading">Hamid Aurangzaib</h4>
              <a style={{fontSize:"15px"}} href="https://randymendomemall.com">hamidaurangzeb@gmail.com</a>
            </div>
            <ul className="sidebar-menu">
              <li className={activeOption === 'dashboard' ? 'active' : ''}>
                <a
                  href="/dashboard"
                  className={activeOption === 'dashboard' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('dashboard', event)}
                >
                  Dashboard
                </a>
              </li>
              <li className={activeOption === 'notifications' ? 'active' : ''}>
                <a
                  href="/notifications"
                  className={activeOption === 'notifications' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('notifications', event)}
                >
                  Add Users
                </a>
              </li>
              <li className={activeOption === 'profile' ? 'active' : ''}>
                <a
                  href="/profile"
                  className={activeOption === 'profile' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('profile', event)}
                >
                  Show Users
                </a>
              </li>
              <li className={activeOption === 'inquiry' ? 'active' : ''}>
                <a
                  href="/inquiry"
                  className={activeOption === 'inquiry' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('inquiry', event)}
                >
                  Update Users
                </a>
              </li>
              <li className={activeOption === 'my-orders' ? 'active' : ''}>
                <a
                  href="/my-orders"
                  className={activeOption === 'my-orders' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('my-orders', event)}
                >
                  Delete Users
                </a>
              </li>
              <li className={activeOption === 'invoices' ? 'active' : ''}>
                <a
                  href="/invoices"
                  className={activeOption === 'invoices' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('invoices', event)}
                >
                  Invoices
                </a>
              </li>
              <li className={activeOption === 'settings' ? 'active' : ''}>
                <a
                  href="/settings"
                  className={activeOption === 'settings' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('settings', event)}
                >
                  Settings
                </a>
              </li>
              <li className={activeOption === 'logout' ? 'active' : ''}>
                <a
                  href="/logout"
                  className={activeOption === 'logout' ? 'active' : ''}
                  onClick={(event) => handleMenuClick('logout', event)}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const MainContent = () => {
    return (
      <div className="col-md-12 col-sm-6 col-lg-9 main">
        {activeOption === 'dashboard' && <div><TopLayout /><MyCards/><Userslist/></div>}
        {activeOption === 'notifications' && <div><TopLayout/><Adduser/></div>}
        {activeOption === 'profile' && <div><TopLayout/><Userslist/></div>}
        {activeOption === 'inquiry' && <div><TopLayout/><Updateuser/></div>}
        {activeOption === 'my-orders' && <div><TopLayout/><Deleteuser/></div>}
        {activeOption === 'invoices' && <div>Invoices Content</div>}
        {activeOption === 'settings' && <div>Settings Content</div>}
        {activeOption === 'logout' && <div>Logout Content</div>}
      </div>
    );
  };

  return (
    <div>
      <AdminNavbar/>
    <div className="admin-dashboard">
      <Sidebar />
      <MainContent />
    </div>
    </div>
  );
};

export default AdminSidebar;
