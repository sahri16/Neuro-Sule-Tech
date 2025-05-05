// TopVideo.js
import React from 'react';
import '../style/TopVideo.css'; 

const TopVideo = ({ title, subtitle }) => {
  return (
    <div className="about-video">
      <div className="top">
        <div className="video-heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/159052-818026310_small.mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default TopVideo;
