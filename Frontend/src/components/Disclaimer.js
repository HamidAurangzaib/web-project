import React from "react";
import Navbar from "./Navbar";
import "./cards.css";
import Footer from "./Footer";

function Disclaimer() {
  // Use useEffect to set popBanner to true when the Privacy component mounts

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row" style={{ backgroundColor: "#fff7fa" }}>
          <div className="col-md-10">
            <h2>Disclaimer</h2>
            <span>
              Welcome to rishtaa.com. This page outlines the terms and
              conditions that govern your use of our website. By accessing and
              using rishtaa.com, you agree to comply with and be bound by the
              following disclaimer. Please read this disclaimer carefully before
              using our services.
            </span>
            <br />
            <br />
            <h2>Information Accuracy</h2>
            <span>
              rishtaa.com is a platform designed to facilitate connections for
              individuals seeking companionship and matrimony. While we strive
              to provide accurate and up-to-date information, we do not
              guarantee the completeness, accuracy, reliability, or availability
              of any content on the site. The information is provided for
              general informational purposes only and should not be relied upon
              for making decisions.
            </span>
            <br />
            <h2>User Responsibilities</h2>
            <span>
              Users of rishtaa.com are responsible for the information they
              provide in their profiles. We do not verify the accuracy of
              user-submitted content and cannot be held responsible for any
              inaccuracies or misrepresentations. Users are encouraged to
              exercise caution and undertake their own due diligence when
              communicating with other users.
            </span>
            <br />
            <h2>Privacy and Security</h2>
            <span>
              We are committed to protecting the privacy and security of our
              users. However, rishtaa.com cannot guarantee the absolute security
              of any information transmitted to or from the website. Users are
              encouraged to take precautions to protect their personal
              information and report any suspicious activity.
            </span>
            <h2>External Links</h2>
            <span>
              rishtaa.com may contain links to external websites that are not
              owned or controlled by us. We are not responsible for the content,
              privacy policies, or practices of these external sites. Users are
              advised to review the terms and conditions of any third-party
              websites linked from rishtaa.com.
            </span>
            <h2>Changes to Disclaimer</h2>
            <span>
              We reserve the right to update or change this disclaimer at any
              time without prior notice. Changes will be effective immediately
              upon posting on this page. It is the responsibility of users to
              check this page periodically for updates.
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

export default Disclaimer;
