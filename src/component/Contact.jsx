import React, { useState } from "react";
import './contact.css'
import NavigationMenu from "../Navigation";
const Contact = () => {
       const ju = document.getElementById('.content');







    return (
    <div className="mobile-frame">
        <div className="status-bar">
            <span>9:41</span>
            <div className="status-icons">
                <i className="fas fa-signal"></i>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-battery-full"></i>
            </div>
        </div>

        <header className="header">
            <h1>Contacts</h1>
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </header>

        <main className="content">
            <div className="invite-section">
                <div className="invite-item">
                    <div className="icon-circle"><i className="fas fa-user-plus"></i></div>
                    <span>Invite friends</span>
                </div>
                <div className="invite-item">
                    <div className="icon-circle"><i className="fas fa-location-dot"></i></div>
                    <span>Find people nearby</span>
                </div>
            </div>

            <div className="contacts-list">
                <div className="contact-item online">
                    <div className="avatar">HB</div>
                    <div className="contact-info">
                        <span className="name">Hissein Blaise</span>
                        <span className="status">Online</span>
                    </div>
                </div>
                <div className="contact-item online">
                    <div className="avatar">AH</div>
                    <div className="contact-info">
                        <span className="name">Amné Haroun Adam</span>
                        <span className="status">Online</span>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="avatar">IA</div>
                    <div className="contact-info">
                        <span className="name">Ismat Adam Yahya</span>
                        <span className="last-seen">Last seen today at 8:40</span>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="avatar">AI</div>
                    <div className="contact-info">
                        <span className="name">Abdelhafis Issa Mahamat</span>
                        <span className="last-seen">Last seen today at 8:40</span>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="avatar">HH</div>
                    <div className="contact-info">
                        <span className="name">Hadje Haoua Mahama Issa</span>
                        <span className="last-seen">Last seen today at 8:40</span>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="avatar">HM</div>
                    <div className="contact-info">
                        <span className="name">Hissein Mahamat Drya</span>
                        <span className="last-seen">Last seen today at 8:40</span>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="avatar">HA</div>
                    <div className="contact-info">
                        <span className="name">Hounaida Ali Bilal</span>
                        <span className="last-seen">Last seen long time ago</span>
                    </div>
                </div>
            </div>
        </main>

        <div className="floating-action-button">
            <i className="fas fa-user-plus"></i>
        </div>

        {/* <nav className="navbar1">
            <div className="nav-item">
                <i className="fas fa-comment-dots"></i>
                <span>Messages</span>
            </div>
            <div className="nav-item active">
                <i className="fas fa-users"></i>
                <span>Contacts</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-phone"></i>
                <span>Calls</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </div>
        </nav> */}
      <NavigationMenu />
    </div>
    )

}

export default Contact;