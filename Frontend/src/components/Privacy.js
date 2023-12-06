import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "./cards.css";
import { bannerContext } from "./Context/Popstate";
import PopupBanner from "./PopupBanner";
import Footer from "./Footer";

function Privacy() {
  const { popBanner, setPopBanner } = useContext(bannerContext);

  // Use useEffect to set popBanner to true when the Privacy component mounts
  useEffect(() => {
    setPopBanner(true);
  }, [setPopBanner]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row" style={{ backgroundColor: "#fff7fa" }}>
          <div className="col-md-10">
            <h2>Privacy Policy</h2>
            <span>
              At rishtaa.com, we respect your privacy. We are committed to
              safeguarding your personal information. This brief Privacy Policy
              outlines how we collect, use, and protect your data.
            </span>
            <br />
            <br />
            <h2>Information We Collect</h2>
            <span>
              <ul>
                <li>Registration data: Name, email, gender, and religious preferences.</li>
                <li>Profile details: Optional photos and self-description.</li>
                <li>Communication data: Messages, likes, and profile views.</li>
                <li>Technical information: IP addresses, browser type, and device data.</li>
              </ul>
            </span>
            <br />
            <h2>How We Use Your Information:</h2>
            <span>
              <span>We use your data to:</span>
              <br />
              <ul>
                <li>Create and manage your account.</li>
                <li>Match you with compatible users.</li>
                <li>Facilitate communication.</li>
                <li>Improve our services.</li>
                <li>Send updates and notifications.</li>
                <li>Comply with legal requirements.</li>
              </ul>
            </span>
            <br />
            <h2>Data Sharing:</h2>
            <span>We share your information:</span>
            <br />
            <span>
              <ul>
                <li>With other users when you interact.</li>
                <li>With trusted service providers.</li>
                <li>As required by law.</li>
              </ul>
            </span>
            <br />
            <h2>Security</h2>
            <span>We employ reasonable security measures to protect your data.</span>
            <br />
            <br />
            <h2>Your Choices:</h2>
            <span>
              You can edit your profile and communication preferences. Contact us for account deletion.
            </span>
            <br />
          </div>
        </div>
        <Footer/>
      </div>
      <PopupBanner /> {/* Render PopupBanner regardless of popBanner state */}
     
    </div>
  );
}

export default Privacy;
