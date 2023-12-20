import React, { useEffect, useState } from "react";
import { getUsernew } from "../Service/api";
import axios from "axios";
import Navbar from "./Navbar";

const Rishtaas = ({ user }) => {
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around", // Adjust as needed
  };

  const cardStyle = {
    border: "1px solid #dddddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s",
    width: "300px", // Set a fixed width for each card
    boxSizing: "border-box",
    overflow: "hidden", // Hide overflow for collapsed view
  };

  const cardHoverStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  const fieldStyle = {
    marginBottom: "8px",
  };

  const imageContainerStyle = {
    height: "280px", // Set a fixed height for the image container
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    objectFit: "cover", // Ensure the image covers the entire container
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const [usersData, setUsersData] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resultrishtaa = await getUsernew();
        console.log("Data from API:", resultrishtaa.data);
        setUsersData(resultrishtaa.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deletedData = await axios.delete(
        `https://shadiwebsite.vercel.app/admin/${id}`
      );
      setUsersData((prevUsers) => prevUsers.filter((user) => user._id !== id));
      console.log("User deleted:", deletedData.data);
      // Close the expanded view after deletion
      setExpandedUser(null);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleViewData = (user) => {
    // Set the expanded user to the selected user
    setExpandedUser(user);
  };

  const handleCloseData = () => {
    // Close the expanded view
    setExpandedUser(null);
  };

  return (
    <div>
      <Navbar />

      <div className="container" style={cardContainerStyle}>
        {usersData.map((item) => (
          <div key={item.email} style={{ ...cardStyle, ...cardHoverStyle }}>
            {/* Image, name, and age */}
            <div style={imageContainerStyle}>
              <img src={item.image} style={imageStyle} alt="user" />
            </div>
            <div style={fieldStyle}>
              <strong>Name:</strong> {item.fname} {item.lname}
            </div>
            <div style={fieldStyle}>
              <strong>Age:</strong> {item.age}
            </div>

            {/* Expanded view */}
            {expandedUser === item && (
              <div>
                <div style={fieldStyle}>
                  <strong>Email:</strong> {item.email}
                </div>
                <div style={fieldStyle}>
                  <strong>Password:</strong> {item.password}
                </div>
                <div style={fieldStyle}>
                  <strong>Religion:</strong> {item.religion}
                </div>
                <div style={fieldStyle}>
                  <strong>Phone Number:</strong> {item.phone}
                </div>
                <div style={fieldStyle}>
                  <strong>Gender:</strong> {item.gender}
                </div>
                <div style={fieldStyle}>
                  <strong>Cast:</strong> {item.cast}
                </div>
                <div style={fieldStyle}>
                  <strong>Country:</strong> {item.country}
                </div>
                <div style={fieldStyle}>
                  <strong>City:</strong> {item.city}
                </div>
                {/* Add other fields as needed */}
                <div style={buttonContainerStyle}>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleCloseData}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewData(item)}
                  >
                    View Data
                  </button>
                </div>
              </div>
            )}

            {/* View Data button */}
            {expandedUser !== item && (
              <div style={{ ...fieldStyle, textAlign: "center" }}>
                <button
                  style={{ ...buttonStyle, color: "white", backgroundColor: "#DA2A77" }}
                  onClick={() => handleViewData(item)}
                >
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rishtaas;
