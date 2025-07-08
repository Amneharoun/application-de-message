import React, { useState } from "react";
import './chatinterface.css';
// import NavigationMenu from "../Navigation";


export default function Chatinterface() {
    const [messages] = useState([
        { id: 1, text: "Hi! your last shot was really good", sender: "user", time: "9:23" },
        { id: 2, text: "What tools do you use ?", sender: "user", time: "9:23"},
        { id: 3, text: "Figma, for orototipe i use principler", sender: "contact", time: "9:23"},
        { id: 4, text: "Cool ! your design inspire me a lot", sender: "user", time: "9:23"},
        { id: 5, text: "Thank u so much Antoan", sender: "contact", time: "9:23"},
        { id: 6, text: "You're welcome", sender: "user", time: "9:23"}
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        if (e.key === 'Enter' && newMessage.trim()){
            console.log('Message envoyé:', newMessage);
            setNewMessage('');
        }
    };

    const StatusBar = () => (
        <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
                <div className="signal-bars">
                    <div className="bar active"></div>
                    <div className="bar active"></div>
                    <div className="bar active"></div>
                    <div className="bar"></div>
                </div>
                <div className="wifi-icon">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M2 3L8 7L14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="battery-icon">
                    <div className="battery-tip"></div>
                </div>
            </div>
        </div>
    );

    const ChatHeader = () => (
        <div className="chat-header">
            <div className="avatar">
                <span>AB</span>
            </div>
            <div className="contact-info">
                <h3 className="contact-name">Antonio banderas</h3>
                <p className="online-status">Online</p>
            </div>
            <div className="menu-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );

    const Message = ({ message }) => (
        <div className={`message ${message.sender === 'user' ? 'user-message' : 'contact-message'}`}>
            <div className="message-bubble">
                <p>{message.text}</p>
            </div>
            <span className="message-time">{message.time}</span>
        </div>
    );

    const InputArea = () => (
        <div className="input-area">
            <div className="input-container">
            <i class="bi bi-alexa"></i>
                <input 
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleSendMessage}
                    placeholder="Type a message" 
                    className="input-container"
                
/>
                {/* <button className="action-btn" aria-label="Attach file">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="m21.44.11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.48"/> 
                   </svg>
                </button>
                <button className="action-btn" aria-label="Security">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <rect width="18" height="18" x="3" y="11" rx="2" ry="2" />
                     <circle cx= "12" cy="16" r="1" />
                     <path d="m7 11-1-9 1-1h10l1 1-1 9" />
                    </svg>
                </button>
                <button className="action-btn" aria-label="Voice message">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0 3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" x2="12" y1="22" y2="22"/>
                        <line x1="8" x2="16" y1="22" y2="22"/>
                    </svg>

                
                </button> */}
                <i class="bi bi-sticky"></i>
                <i class="bi bi-camera"></i>
                <i class="bi bi-mic"></i>
                
            </div>
            
            <div className="home-indicator"></div>
        </div>
    );

   
     return (
        <div className="chat-container">
            <StatusBar />
            <ChatHeader />

            <div className="date-separator">
                <span>Today</span>
            </div>

            <div className="messages-container">
                {messages.map((message) =>(
                    <Message key={message.id} message={message} />
                ))} 
            </div>

            <InputArea />

            {/* <NavigationMenu /> */}
        </div>
    );
};
