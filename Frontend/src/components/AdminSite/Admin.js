import React, { useState } from "react";
import "./admin.css";
import Userslist from "./Userslist";
import Deleteuser from "./Deleteuser";
import Adduser from "./Adduser";
import Updateuser from "./Updateuser";
import Navbar from "../Navbar";

const Admin = () => {
  const [activeOption, setActiveOption] = useState("add");

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <button onClick={() => setActiveOption("add")}>Add Users</button>
        <button onClick={() => setActiveOption("show")}>Show Users</button>
        <button onClick={() => setActiveOption("delete")}>Delete Users</button>
        <button onClick={() => setActiveOption("edit")}>Edit Users</button>
      </div>
    );
  };

  const MainContent = () => {
    switch (activeOption) {
      case "add":
        return (
          <div>
            <Adduser />
          </div>
        );
      case "show":
        return (
          <div>
            <Userslist />
          </div>
        );
      case "delete":
        return (
          <div>
            <Deleteuser />
          </div>
        );
      case "edit":
        return (
          <div>
            <Updateuser />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="admin-dashboard mt-3">
        <Sidebar />
        <div className="container w-90">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Admin;
