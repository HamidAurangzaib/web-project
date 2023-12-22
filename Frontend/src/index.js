import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="281433921823-u1bum0odfdqv7p3u4ce3hcr3rcoa19tf.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </BrowserRouter>
);
