import React from 'react';
import './App.css';
import profilePicture from './user-profile.svg';
import searchIcon from './search-icon.svg'; 
import notificationsIcon from './notifications.svg';
import messagesIcon from './messages.svg';
import profileIcon from './profiles.svg';
import homeIcon from './home.svg';
import replyIcon from './reply.svg';
import repostIcon from './repost.svg';
import voteUpIcon from './vote-up.svg';
import voteDownIcon from './vote-down.svg';
import appIcon from './app-icon.svg'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-column">
          <h1>Yespeak <img src={appIcon} alt="app Icon" /></h1>
          <ul>
            <li><a href="#"><img src={homeIcon} alt="Home Icon" /> Home </a></li>
            <li><a href="#"><img src={searchIcon} alt="Explore" /> Explore</a></li>
            <li><a href="#"><img src={notificationsIcon} alt="notifications-Icon" /> Notifications</a></li>
            <li><a href="#"><img src={messagesIcon} alt="messages-Icon" /> Messages</a></li>
            <li><a href="#"><img src={profileIcon} alt="User Profile" /> Profile</a></li>
            <li><button>Speak Up</button></li>
          </ul>
        </div>
        <div className="center-column">
          <nav>
            <ul className="navigation">
              <li><a href="#" className="active">Your feed</a></li>
              <li><a href="#">Tracking</a></li>
            </ul>
          </nav>
          <div className="dynamic-content">
            {/* Dynamic content goes here */}
            {/* Example of a dynamic post */}
            <div className="post">
              <div className="user-info">
                <img src={profilePicture} alt="User Profile" />
                <span className="username">JohnDoe</span>
              </div>
              <div className="message">
                This is a sample message posted by a user.
              </div>
              <div className="actions">
                <a href="#"><img src={replyIcon} alt="reply Icon" />  </a>
                <a href="#"><img src={repostIcon} alt="repost Icon" /> </a>
                <a href="#"><img src={voteUpIcon} alt="voteUp Icon" /> </a>
                <a href="#"><img src={voteDownIcon} alt="voteDown Icon" /> </a>
              </div>
            </div>
            {/* Add more dynamic posts as needed */}
            <div className="post">
              <div className="user-info">
                <img src={profilePicture} alt="User Profile" />
                <span className="username">Musili</span>
              </div>
              <div className="message">
                Moh Salah Belongs AWB pockets.
              </div>
              <div className="actions">
                <a href="#"><img src={replyIcon} alt="reply Icon" />  </a>
                <a href="#"><img src={repostIcon} alt="repost Icon" /> </a>
                <a href="#"><img src={voteUpIcon} alt="voteUp Icon" /> </a>
                <a href="#"><img src={voteDownIcon} alt="voteDown Icon" /> </a>
              </div>
            </div>
            {/* Add more dynamic posts as needed */}
          </div>
        </div>
        <div className="right-column">
          <div className='search-box'>
            <input type="text" placeholder="Search..." />
            <img src={searchIcon} alt="Search" />
          </div>
          <div className="like-box">
            <p>Subscribe to get premium</p>
            {/* Dynamic content for the like box */}
          </div>  
          <div className="trends-box">
            <div className="trend">
              <span>USA</span>
              <span>Voting</span>
              <span>Trumps</span>
              <span>10,000 speaks</span>
            </div>
            {/* Add more trend rows as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

