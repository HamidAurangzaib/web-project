import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { getUsers, updateUser } from "../../Service/api";

function Updateuser() {
  const [usersData, setUsersData] = useState([]);
  const [addusers, setAddusers] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    age:""
  });

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

  const handlechange = (e) => {
    setAddusers({ ...addusers, [e.target.name]: e.target.value });
  };

  const findUserToUpdate = (email) => {
    return usersData.find((user) => user.email === email);
  };

  const adddetails = async (e) => {
    e.preventDefault();

    const userToUpdate = findUserToUpdate(addusers.email);

    if (userToUpdate) {
      try {
        // Assuming you have an input form with fields for updating user information
        const updatedUserData = {
          fname: addusers.fname || userToUpdate.fname,
          lname: addusers.lname || userToUpdate.lname,
          email: addusers.email,
          password: addusers.password || userToUpdate.password,
          age: addusers.age || userToUpdate.age,
          religion: addusers.religion || userToUpdate.religion,

        };

        await updateUser(userToUpdate._id, updatedUserData);

        // Optionally, update the local state to reflect the changes
        setUsersData((prevUsers) => {
          return prevUsers.map((user) =>
            user._id === userToUpdate._id ? updatedUserData : user
          );
        });

        console.log("User updated successfully!");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      console.error("User not found for update");
    }
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard
          className="mt-2 mx-5 mb-5 p-5 shadow-5"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 text-center">
            <h2 className="fw-bold mb-5">Update Users</h2>

            <form>
              {/* Your form components here */}
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    label="First name"
                    name="fname"
                    type="text"
                    onChange={(e) => handlechange(e)}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    label="Last name"
                    name="lname"
                    type="text"
                    onChange={(e) => handlechange(e)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                label="Email"
                name="email"
                type="email"
                onChange={(e) => handlechange(e)}
              />
              <MDBInput
                label="Password"
                name="password"
                type="password"
                onChange={(e) => handlechange(e)}
              />
              <MDBInput
              wrapperClass="mb-4"
              label="Age"
              id="form1"
              name="age"
              type="number"
              onChange={(e) => handlechange(e)}
            />

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                onClick={(e) => adddetails(e)}
              >
                Update User
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Updateuser;
