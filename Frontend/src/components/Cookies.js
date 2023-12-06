import React from "react";
import Navbar from "./Navbar";
import "./cards.css";
import Footer from "./Footer";

function Cookies() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row" style={{ backgroundColor: "#fff7fa" }}>
          <div className="col-md-10">
            <h2>Cookies Policy</h2>
            <span>
              Welcome to rishtaa.com. This page outlines our policy regarding
              the use of cookies on our website. By accessing and using
              rishtaa.com, you agree to the use of cookies as described in this
              policy. Please read this Cookies Policy carefully before using our
              services.
            </span>
            <br />
            <br />
            <h2>What Are Cookies?</h2>
            <span>
              Cookies are small text files that are stored on your device
              (computer, tablet, smartphone) when you visit a website. They are
              widely used to enhance the user experience, personalize content,
              and gather website analytics.
            </span>
            <br />
            <h2>How We Use Cookies</h2>
            <span>
              rishtaa.com uses cookies for various purposes, including but not
              limited to: Essential Cookies: These cookies are necessary for the
              website to function properly. They enable basic functions such as
              page navigation and access to secure areas of the website.
              Performance Cookies: These cookies help us understand how visitors
              interact with our website by collecting and reporting information
              anonymously. This information allows us to improve the performance
              and functionality of our site. Functionality Cookies: These
              cookies enable the website to remember choices you make (such as
              your username or language preference) for a more personalized
              experience. Advertising Cookies: We may use third-party cookies
              for advertising purposes. These cookies may be used to deliver
              personalized advertisements based on your interests and online
              behavior.
            </span>
            <br />
            <h2>Third-Party Cookies</h2>
            <span>
              rishtaa.com may use third-party services that also use cookies.
              These third-party services include analytics tools, social media
              platforms, and advertising networks. The use of cookies by these
              third parties is subject to their respective privacy policies, and
              rishtaa.com has no control over these cookies.
            </span>
            <h2>Managing Cookies</h2>
            <span>
              Most web browsers allow you to control cookies through their
              settings. You can choose to accept or reject cookies, or request
              notification when a cookie is set. Please note that disabling
              cookies may affect the functionality and user experience of
              rishtaa.com.
            </span>
            <h2>Changes to Disclaimer</h2>
            <span>
              We reserve the right to update or change this disclaimer at any
              time without prior notice. Changes will be effective immediately
              upon posting on this page. It is the responsibility of users to
              check this page periodically for updates.
            </span>
            <br />

            <h2>Changes to Cookies Policy</h2>
            <span>
              We reserve the right to update or change this Cookies Policy at
              any time without prior notice. Changes will be effective
              immediately upon posting on this page. It is the responsibility of
              users to check this page periodically for updates.
            </span>
            <br />

            <h2>Contact Us</h2>
            <span>
              If you have any questions or concerns regarding this disclaimer,
              please contact us at [contact@rishtaa.com]. By using rishtaa.com,
              you acknowledge that you have read, understood, and agreed to the
              terms outlined in this disclaimer. Thank you for being a part of
              the rishtaa.com community. Warm regards, Hamid Aurangzaib Founder,
              rishtaa.com
            </span>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cookies;
