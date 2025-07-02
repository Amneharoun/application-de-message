import React from 'react';
import './profile.css';
import NavigationMenu from '../Navigation';

const Profile = () => {
  return (
    <div className="mobile-frame">
    <div className="profiles-container">
      {/* Header */}
      <h1 className="header">My profiles</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-avatar">AB</div>
        <div className="profile-info">
          <h2 className="profile-name">Antonio banderas</h2>
          <p className="profile-status">Online</p>
        </div>
      </div>

      <div className="divider"></div>

      {/* Settings Section */}
      <div className="section">
        <h2 className="section-title">Settings</h2>
        <div className="option">
          {/* <input type="checkbox" id="notification" /> */}
          <i class="fa-solid fa-bell" id="chats" ></i>

          <label htmlFor="notification">Notification</label>
        </div>
        <div className="option checked">
          {/* <input type="checkbox" id="privacy" checked readOnly /> */}
          <i class="fa-solid fa-lock" id="pchats"></i>
          <label htmlFor="privacy">Privacy and security</label>
        </div>
        <div className="option">
          {/* <input type="checkbox" id="chats" /> */}
          <i class="fa-solid fa-comment" id="chats"></i>
          <label htmlFor="chats">Chats</label>
        </div>
        <div className="option">
          {/* <input type="checkbox" id="storage" /> */}
         <i class="fa-solid fa-database" id="chats"></i>
          <label htmlFor="storage">Storage and date</label>
        </div>
      </div>

      <div className="divider"></div>
      
      {/* Help Section */}
      <div className="section">
        <h2 className="section-title">Help</h2>
        <div className="option">
          {/* <input type="checkbox" id="faq" /> */}
          <i class="fa-brands fa-whatsapp" id="faq" ></i>
          <label htmlFor="faq">What's up FAQ</label>
        </div>
        <div className="option">
          {/* <input type="checkbox" id="policy" /> */}
          <i class="fa-solid fa-key" id="policy"></i>
          <label htmlFor="policy">Privacy policy</label>
        </div>
        <div className="option checked">
          {/* <input type="checkbox" id="question" checked readOnly /> */}
          <i class="fa-solid fa-mask-face" id="question"></i>
          <label htmlFor="question">Ask a question</label>
        </div>
      </div>

      <div className="divider"></div>

      {/* Navigation */}
      {/* <div className="navigation">
        <div className='icons1'>
          <i class="fa-solid fa-phone"></i>
          <button className="nav-button active">Messages</button>
        </div>
        <div className='icons2'>
        <i class="fa-solid fa-user-friends"></i>
        <button className="nav-button">Contacts</button>
         </div>
         <div className='icons3'>
         <i class="fa-solid fa-phone"></i>
        <button className="nav-button">Calls</button>
         </div>
         <div className='icons4'>
        <i class="fa-solid fa-user"></i>
        <button className="nav-button">Profile</button>
        </div>
       
      </div> */}
      </div>
      <NavigationMenu />
    </div>
  );
};

export default Profile;