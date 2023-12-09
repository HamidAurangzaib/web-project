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
    age: "",
    religion: "",
    phone: "",
    gender: "",
    cast: "",
    country: "",
    city: "",
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
          phone: addusers.phone || userToUpdate.phone,
          gender: addusers.gender || userToUpdate.gender,
          cast: addusers.cast || userToUpdate.cast,
          country: addusers.country || userToUpdate.country,
          city: addusers.city || userToUpdate.city,


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
            <label for="genderCombo" class="form-label">
              I'm Looking for:
            </label>
            <select
              class="form-select"
              id="genderCombo"
              name="gender"
              onChange={(e) => handlechange(e)}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            <label for="religionCombo" class="form-label">
              Religion:
            </label>
            <select
              class="form-select"
              id="religionCombo"
              name="religion"
              onChange={(e) => handlechange(e)}
            >
              <option value="" disabled selected>
                Select Religion
              </option>
              <option value="hinduism">Hinduism</option>
              <option value="christianity">Christianity</option>
              <option value="islam">Islam</option>
              <option value="buddhism">Buddhism</option>
              <option value="sikhism">Sikhism</option>
              <option value="judaism">Judaism</option>
            </select>
            <label for="castCombo" class="form-label">
              Cast:
            </label>
            <select
              class="form-select"
              id="castCombo"
              name="cast"
              onChange={(e) => handlechange(e)}
            >
              <option value="" disabled selected>
                Select Cast
              </option>
              <option value="punjabi">Punjabi</option>
              <option value="sindhi">Sindhi</option>
              <option value="pathan">Pathan</option>
              <option value="muhajir">Muhajir</option>
              <option value="baloch">Baloch</option>
              <option value="kashmiri">Kashmiri</option>
              <option value="awan">Awan</option>
              <option value="Gujjar">Gujjar</option>
              <option value="rajpoot">Rajpoot</option>
              <option value="kashmiri">Kashmiri</option>
              <option value="mughal">Mughal</option>
              <option value="tanoli">Tanoli G</option>
            </select>
            <br />
            <MDBInput
              wrapperClass="mb-4"
              label="Phone No:"
              id="form1"
              name="phone"
              type="number"
              onChange={(e) => handlechange(e)}
            />
            <label for="cityCombo" class="form-label">
              Currently Living:
            </label>

            <select
              class="form-select"
              id="livingCountryCombo"
              name="country"
              onChange={(e) => handlechange(e)}
            >
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="afghanistan">Afghanistan</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="india">India</option>
              <option value="united-states">United States</option>
              <option value="pakistan">Pakistan</option>
            </select>
            <label for="cityCombo" class="form-label">
              City:
            </label>
            <select
              class="form-select"
              id="cityCombo"
              name="city"
              onChange={(e) => handlechange(e)}
            >
              <option value="" disabled selected>
                Select City
              </option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
              <option value="peshawar">Peshawar</option>
              <option value="quetta">Quetta</option>
            </select>

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Subscribe to our newsletter"
              />
            </div>

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
