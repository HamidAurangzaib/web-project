import React from "react";
import Navbar from "./Navbar";
import "./cards.css";
import Footer from "./Footer";

function Tos() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row" style={{ backgroundColor: "#fff7fa" }}>
          <div className="col-md-10">
            <h2>Terms Of Service</h2>
            <span>
              Welcome to rishtaa.com. The following terms and conditions
              ("Terms") govern your use of our website. By accessing and using
              rishtaa.com, you agree to comply with and be bound by these Terms.
              Please read these Terms carefully before using our services.
            </span>
            <br />
            <br />
            <h2>Acceptance of Terms</h2>
            <span>
              By accessing or using rishtaa.com, you agree to be bound by these
              Terms. If you do not agree to these Terms, please refrain from
              using our services.
            </span>
            <br />
            <h2>Use of Services</h2>
            <span>
              a. Eligibility: You must be at least 18 years old to use
              rishtaa.com. By using our services, you represent and warrant that
              you are at least 18 years old.
              <br />
              b. Account Creation: To access certain features of rishtaa.com,
              you may be required to create an account. You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
              <br />
              c. User Content: By submitting content to rishtaa.com, including
              but not limited to profiles, messages, and comments, you grant
              rishtaa.com the right to use, modify, and display the content in
              connection with the services.
            </span>
            <br />
            <h2>Code of Conduct</h2>
            <span>
              a. Respect: Users are expected to treat each other with respect
              and courtesy. Harassment, discrimination, or any form of
              inappropriate behavior is strictly prohibited.
              <br />
              b. Accuracy of Information: Users are responsible for the accuracy
              of the information provided in their profiles. Misrepresentation
              of personal information is a violation of these Terms.
            </span>
            <h2>Managing Cookies</h2>
            <span>
              Most web browsers allow you to control cookies through their
              settings. You can choose to accept or reject cookies, or request
              notification when a cookie is set. Please note that disabling
              cookies may affect the functionality and user experience of
              rishtaa.com.
            </span>
            <h2>Privacy</h2>
            <span>
              Your privacy is important to us. Our Privacy Policy outlines how
              we collect, use, and disclose your personal information. By using
              rishtaa.com, you consent to the practices described in the Privacy
              Policy.
            </span>
            <br />

            <h2>Changes to Terms</h2>
            <span>
              We reserve the right to update or change these Terms at any time
              without prior notice. Changes will be effective immediately upon
              posting on this page. It is your responsibility to review these
              Terms periodically for updates.
            </span>
            <br />

            <h2>Contact Us</h2>
            <span>
              If you have any questions or concerns regarding this disclaimer,
              please contact us at [contact@rishtaa.com]. By using rishtaa.com,
              you acknowledge that you have read, understood, and agreed to the
              terms outlined in this disclaimer. Thank you for being a part of
              the rishtaa.com community.
              <br/>
               Warm regards, Hamid Aurangzaib Founder, rishtaa.com
            </span>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Tos;
