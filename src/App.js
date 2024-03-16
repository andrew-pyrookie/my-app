import React from 'react';
import './App.css';
import profilePicture from './profile.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-column">
          <h1>Yespeak</h1>
          <ul>
            <li><a href="#"><img src="link1-icon.png" alt="Link 1" /> Home </a></li>
            <li><a href="#"><img src="link2-icon.png" alt="Link 2" /> Explore</a></li>
            <li><a href="#"><img src="link3-icon.png" alt="Link 3" /> Notifications</a></li>
            <li><a href="#"><img src="link4-icon.png" alt="Link 4" /> Messages</a></li>
            <li><a href="#"><img src="link5-icon.png" alt="Link 5" /> Profile</a></li>
          </ul>
        </div>
        <div className="center-column">
          {/* Your main content in the center column */}
        </div>
        <div className="right-column">
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
                <button>Like</button>
                <button>Repost</button>
                <button>Vote down</button>
                <button>Reply</button>
              </div>
            </div>
            {/* Add more dynamic posts as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

