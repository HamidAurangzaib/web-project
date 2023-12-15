import React from 'react';
import leaf from '../images/image-removebg-preview.png';
import Userslist from './Userslist';

function TopLayout() {
  return (
    <div className="container">
      <div className="row" style={{ border: '2px solid #f6e5d8', backgroundColor: "#f9f9f9", borderRadius: '10px' }}>
        <div className="col-md-12 col-lg-3 mb-5">
          <div>
            <h2>Good Morning</h2>
            <p>Hamid Aurangzaib</p>
          </div>
        </div>
        <div className="col-md-12 col-lg-3 mb-3">
          <div >
            <h4>Save The Society </h4>
            <p>We focus on 100% original people seeking for rishtaas, For those looking for online marriage-related connections, our platform provides a secure and trusted space to explore meaningful relationships.</p>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <img className="img-fluid" src={leaf} alt="Leaf" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TopLayout;
