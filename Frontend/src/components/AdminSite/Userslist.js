import React, { useEffect, useState } from "react";
import { getUsers } from "../../Service/api";
import axios from "axios";

const url = "web-project-prul.vercel.app";

const Userslist = ({ users }) => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const thCommonStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "16px",  // Increased padding for th
  };

  const thHeaderStyle = {
    ...thCommonStyle,
    background: "#ffffff",  // White background for the header row
    fontWeight: "bold",
    color: "#4a3637",  // Set text color to brown
  };

  const thColumnStyle = {
    ...thCommonStyle,
    background: "#ffffff",  // White background for the columns
    border: "none",  // Remove borders for columns
    fontSize: "14px",  // Adjust text size
    fontWeight: "normal",  // Remove bold property
    fontFamily: "Arial, sans-serif",  // Set font family
  };

  const tdStyle = {
    border: "none",  // Remove borders for table cells
    textAlign: "left",
    padding: "16px",  // Increased padding for td
    transition: "background-color 0.3s",
    fontSize: "14px",  // Adjust text size
    fontFamily: "Arial, sans-serif",  // Set font family
    color: "#8B4513",  // Set text color to brown
    
  };

  const trHoverStyle = {
    background: "#ffffff",
  };

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUsers();
        console.log(result);
        setUsersData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <table className="mt-3" style={tableStyle}>
      <thead>
        <tr>
          <th style={thHeaderStyle} colSpan="11">Registered Users</th>
        </tr>
        <tr>
          <th style={thColumnStyle}>First Name</th>
          <th style={thColumnStyle}>Last Name</th>
          <th style={thColumnStyle}>Email</th>
          
          <th style={thColumnStyle}>Age</th>
          <th style={thColumnStyle}>Religion</th>
          <th style={thColumnStyle}>Phone Number</th>
          <th style={thColumnStyle}>Looking for</th>
          <th style={thColumnStyle}>Cast</th>
          <th style={thColumnStyle}>Country</th>
          <th style={thColumnStyle}>City</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((item) => (
          <tr key={item.email} style={trHoverStyle}>
            <td style={tdStyle}>{item.fname}</td>
            <td style={tdStyle}>{item.lname}</td>
            <td style={tdStyle}>{item.email}</td>
            <td style={tdStyle}>{item.age}</td>
            <td style={tdStyle}>{item.religion}</td>
            <td style={tdStyle}>{item.phone}</td>
            <td style={tdStyle}>{item.gender}</td>
            <td style={tdStyle}>{item.cast}</td>
            <td style={tdStyle}>{item.country}</td>
            <td style={tdStyle}>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Userslist;
