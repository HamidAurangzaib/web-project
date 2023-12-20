import React from 'react';
import { AiOutlineUser, AiOutlineWarning } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';


const MyCards = () => {
  return (
    <div className='row mt-3' style={containerStyle}>
      <div className='col-md-4'>
        <div style={cardStyle}>
          <div style={rowStyle}>
            <div style={iconStyle}>
              <AiOutlineUser size={40} />
            </div>
            <div style={numberStyle}>30</div>
            <div style={textStyle}>Registered Users</div>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div style={cardStyle}>
          <div style={rowStyle}>
            <div style={iconStyle}>
              <FaCheckCircle size={40} /> {/* Icon for Verified Users */}
            </div>
            <div style={numberStyle}>10</div>
            <div style={textStyle}>Verified Users</div>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div style={cardStyle}>
          <div style={rowStyle}>
            <div style={iconStyle}>
              <AiOutlineWarning size={40} /> {/* Icon for Deleted Users */}
            </div>
            <div style={numberStyle}>2</div>
            <div style={textStyle}>Deleted Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  margin: '5px', // Add margin for better spacing
};

const cardStyle = {
  border: '3px solid #ffcccc', // Light pink border
  borderRadius: '12px', // Border radius
  padding: '15px', // Increased padding
  width: '240px', // Increased the width for better spacing
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const numberStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '5px', // Adjusted margin to add space between the number and text
};

const textStyle = {
  fontSize: '14px',
  fontWeight:'bold',
  margin: '0', // Reset margin for the text
};

const iconStyle = {
  fontSize: '40px', // Increased the size of the icon
  color: '#4a3637' // Changed the color of the icon to brown
};

export default MyCards;
