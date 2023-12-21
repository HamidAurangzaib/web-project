import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './signin.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { authenticateUser } from '../Service/api'; // Import the authentication function

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async () => {
    try {
      // Call the authentication function with entered email and password
      const response = await authenticateUser({ email, password });

      // Check if authentication is successful based on the response from the server
      if (response.success) {
        // Redirect to the home page or any other authorized page
        // You can use react-router-dom for this purpose
        console.log('Authentication successful!');
      } else {
        // Display an error message to the user
        console.error('Authentication failed. Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during authentication:', error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <MDBContainer fluid className="container-fluid p-3 my-5">
        <MDBRow className="container-fluid mainrow mb-3">
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='formControlLg'
              type='email'
              size="lg"
              onChange={handleEmailChange}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='formControlLg'
              type='password'
              size="lg"
              onChange={handlePasswordChange}
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSignIn}>
              Sign in
            </MDBBtn>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
              <MDBIcon fab icon="facebook-f" className="mx-2"/>
              Continue with facebook
            </MDBBtn>
            <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
              <MDBIcon fab icon="twitter" className="mx-2"/>
              Continue with twitter
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <div className='container-fluid'>
          <Footer />
        </div>
      </MDBContainer>
    </div>
  );
}

export default Signin;
