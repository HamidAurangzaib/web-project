import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import Footer from './Footer';
import { addUsers } from '../Service/api';

function Signup() {
  const [addusers, setAddusers] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    religion: "",
    cast: "",
    phone: "",
    country: "",
    city: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    // For dropdowns, handle them separately
    if (name === 'gender' || name === 'religion' || name === 'cast' || name === 'country' || name === 'city') {
      // For dropdowns, get the selected value using e.target.selectedOptions[0].value
      setAddusers((prevData) => ({ ...prevData, [name]: e.target.selectedOptions[0].value }));
    } else {
      // For other input fields, use the normal approach
      setAddusers((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const adddetails = async (e) => {
    e.preventDefault();
    console.log("Data", addusers);
    await addUsers(addusers);
  };

  return (
    <div>
      <Navbar />
      <MDBContainer fluid>
        <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
        <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
          <MDBCardBody className='p-5 text-center'>
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1' name='fname' type='text' onChange={(e) => handlechange(e)} />
              </MDBCol>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Last name' id='form1' name='lname' type='text' onChange={(e) => handlechange(e)} />
              </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' name='email' type='email' onChange={(e) => handlechange(e)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' name='password' type='password' onChange={(e) => handlechange(e)} />
            <MDBInput wrapperClass='mb-4' label='Age' id='form1' name='age' type='number' onChange={(e) => handlechange(e)} />
            <label for="genderCombo" class="form-label">I'm Looking for:</label>
            <select class="form-select" id="genderCombo" name="gender" onChange={(e) => handlechange(e)}>
              <option value="" disabled selected>Select</option>
              <option value="man">man</option>
              <option value="woman">woman</option>
            </select>
            <label for="religionCombo" class="form-label">Religion:</label>
            <select class="form-select" id="religionCombo" name="religion" onChange={(e) => handlechange(e)}>
              <option value="" disabled selected>Select Religion</option>
              <option value="hinduism">hinduism</option>
              <option value="christianity">christianity</option>
              <option value="islam">islam</option>
              <option value="buddhism">buddhism</option>
              <option value="sikhism">sikhism</option>
              <option value="judaism">judaism</option>
            </select>
            <label for="castCombo" class="form-label">Cast:</label>
            <select class="form-select" id="castCombo" name="cast" onChange={(e) => handlechange(e)}>
              <option value="" disabled selected>Select Cast</option>
              <option value="punjabi">punjabi</option>
              <option value="sindhi">sindhi</option>
              <option value="pathan">pathan</option>
              <option value="muhajir">muhajir</option>
              <option value="baloch">baloch</option>
              <option value="kashmiri">kashmiri</option>
              <option value="awan">awan</option>
              <option value="Gujjar">gujjar</option>
              <option value="rajpoot">rajpoot</option>
              <option value="kashmiri">kashmiri</option>
              <option value="mughal">mughal</option>
              <option value="tanoli">tanoli g</option>
            </select>
            <br />
            <MDBInput wrapperClass='mb-4' label='Phone No:' id='form1' name='phone' type='number' onChange={(e) => handlechange(e)} />
            <label for="cityCombo" class="form-label">Currently Living:</label>
            <select class="form-select" id="livingCountryCombo" name="country" onChange={(e) => handlechange(e)}>
              <option value="" disabled selected>Select Country</option>
              <option value="afghanistan">afghanistan</option>
              <option value="australia">australia</option>
              <option value="canada">canada</option>
              <option value="india">india</option>
              <option value="united-states">united States</option>
              <option value="pakistan">pakistan</option>
            </select>
            <label for="cityCombo" class="form-label">City:</label>
            <select class="form-select" id="cityCombo" name="city" onChange={(e) => handlechange(e)}>
              <option value="" disabled selected>Select City</option>
              <option value="karachi">karachi</option>
              <option value="lahore">lahore</option>
              <option value="islamabad">islamabad</option>
              <option value="peshawar">peshawar</option>
              <option value="quetta">quetta</option>
            </select>
            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>
            <MDBBtn className='w-100 mb-4' size='md' onClick={(e) => adddetails(e)}>sign up</MDBBtn>
            <div className="text-center">
              <p>or sign up with:</p>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Signup;
