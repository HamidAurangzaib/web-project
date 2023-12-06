import React, { useState } from "react";
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
import { addUsers } from "../../Service/api";

function Adduser() {
  const [addusers, setAddusers] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    age: "",
    religion: "",
  });

  const handlechange = (e) => {
    setAddusers({ ...addusers, [e.target.name]: [e.target.value] });
  };
  const adddetails = async (e) => {
    e.preventDefault();
    await addUsers(addusers);
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
            <h2 className="fw-bold mb-5">Add Users</h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First name"
                  id="form1"
                  name="fname"
                  type="text"
                  onChange={(e) => handlechange(e)}
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="form1"
                  name="lname"
                  type="text"
                  onChange={(e) => handlechange(e)}
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              name="email"
              type="email"
              onChange={(e) => handlechange(e)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
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
            <select class="form-select" id="genderCombo">
              <option value="" disabled selected>
                Select
              </option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            <label for="religionCombo" class="form-label">
              Religion:
            </label>
            <select class="form-select" id="religionCombo" name="religion">
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
            <select class="form-select" id="castCombo">
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

            <select class="form-select" id="livingCountryCombo">
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="afghanistan">Afghanistan</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="india">India</option>
              <option value="united-states">United States</option>
              <option value="united-states">Pakistan</option>
            </select>
            <label for="cityCombo" class="form-label">
              City:
            </label>
            <select class="form-select" id="cityCombo">
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
              Add User
            </MDBBtn>

            <div className="text-center">
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Adduser;
