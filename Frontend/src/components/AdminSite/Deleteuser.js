import React, { useEffect, useState } from "react";
import { getUsers } from "../../Service/api";
import axios from "axios";

const url = "https://shadiwebsite.vercel.app/";

const Deleteuser = ({ users }) => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const thCommonStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "12px",  // Decreased padding for th
  };

  const thHeaderStyle = {
    ...thCommonStyle,
    background: "#ffffff",
    fontWeight: "bold",
    color: "#4a3637",
  };

  const thColumnStyle = {
    ...thCommonStyle,
    background: "#ffffff",
    border: "none",
    fontSize: "12px",  // Decreased font size for columns
    fontWeight: "normal",
    fontFamily: "Arial, sans-serif",
  };

  const tdStyle = {
    border: "none",
    textAlign: "left",
    padding: "12px",  // Decreased padding for td
    transition: "background-color 0.3s",
    fontSize: "12px",  // Decreased font size for table cells
    fontFamily: "Arial, sans-serif",
    color: "#8B4513",
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

  const handleDelete = async (id) => {
    try {
      const deletedData = await axios.delete(`${url}/admin/${id}`);
      setUsersData((prevUsers) => prevUsers.filter((user) => user._id !== id));
      console.log("User deleted:", deletedData.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

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
          <th style={thColumnStyle}>Action</th>
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
            <td style={tdStyle}>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Deleteuser;
