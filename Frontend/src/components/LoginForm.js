import React, { useEffect, useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a state to store a message
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Start an validation process
    if (email && password) {
      if (email === 'hamid.aurangzeb@gmail.com' && password === 'hamid123') {
        setMessage('Login successful');
        console.log("Success");
      } else {
        setMessage('Login failed');
        console.log("Fail");
      }
    }
  }, [email, password]);

  

  return (
    <div className="container">
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display the message based on the result */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginForm;