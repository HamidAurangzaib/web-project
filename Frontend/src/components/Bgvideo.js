// Bgvideo.js
import React from 'react';
import './bgvideo.css';  // Make sure the CSS file is imported correctly
import video from './images/wedding.mp4';

function Bgvideo() {
  return (
    <div className='container mt-3'>
    <div className="video-container">
      <video className="resizable-video" src={video} autoPlay loop muted />
    </div>
    </div>
  );
}

export default Bgvideo;
