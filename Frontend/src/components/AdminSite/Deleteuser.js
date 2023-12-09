import React, { useEffect, useState } from "react";
import { getUsers } from "../../Service/api";
import axios from "axios";

const url = "http://localhost:5000";

const Deleteuser = ({ users }) => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const thStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "12px",
    background: "#f2f2f2",
    fontWeight: "bold",
  };

  const tdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "12px",
  };

  const trStyle = {
    transition: "background-color 0.3s",
  };

  const trHoverStyle = {
    backgroundColor: "#e6f7ff",
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
      // Remove the deleted user from the state
      setUsersData((prevUsers) => prevUsers.filter((user) => user._id !== id));
      console.log("User deleted:", deletedData.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
        <th style={thStyle}>First Name</th>
          <th style={thStyle}>Last Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Password</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Religion</th>
          <th style={thStyle}>Phone Number</th>
          <th style={thStyle}>Looking for</th>
          <th style={thStyle}>Cast</th>
          <th style={thStyle}>Country</th>
          <th style={thStyle}>City</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((item) => (
          <tr key={item.email} style={{ ...trStyle, ...trHoverStyle }}>
            <td style={tdStyle}>{item.fname}</td>
            <td style={tdStyle}>{item.lname}</td>
            <td style={tdStyle}>{item.email}</td>
            <td style={tdStyle}>{item.password}</td>
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
