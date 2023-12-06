import React from "react";
import Navbar from "./Navbar";
import "./cards.css";
import Footer from "./Footer";

function About() {
  // Use useEffect to set popBanner to true when the Privacy component mounts

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row" style={{ backgroundColor: "#fff7fa" }}>
          <div className="col-md-10">
            <h2>About Us</h2>
            <span>
              Hello, I'm Hamid Aurangzaib, the founder of rishtaa.com. I
              envisioned this platform as a haven for individuals seeking a
              meaningful connection that leads to a lifetime of happiness. In a
              world that's constantly changing, finding a life partner who
              shares your values, dreams, and aspirations can be a challenge.
              That's where rishtaa.com comes in.
            </span>
            <br />
            <br />
            <h2>Our Mission</h2>
            <span>
              At rishtaa.com, our mission is to bring people together for a
              purposeful journey towards matrimony. We understand the
              significance of finding a life partner, and we're committed to
              making this process as seamless and enjoyable as possible. Our
              platform is designed to facilitate connections based on
              compatibility, shared interests, and mutual respect.
            </span>
            <br />
            <h2>What Sets Us Apart</h2>
            <span>
              Focus on Quality Connections: We prioritize quality over quantity.
              Every profile on rishtaa.com is a real person looking for genuine
              companionship. User-Friendly Interface: Navigating through our
              website is intuitive and user-friendly, ensuring that your
              experience is smooth and enjoyable. Privacy and Security: We value
              your privacy. Our platform employs robust security measures to
              safeguard your personal information, creating a secure environment
              for your search for love.
            </span>
            <br />
            <h2>Join Us on this Journey</h2>
            <span>
              I invite you to join our growing community of like-minded
              individuals. Your journey towards finding a life partner begins
              here, at rishtaa.com. Thank you for choosing us as your trusted
              companion in the search for love. 
              Warm regards, Hamid Aurangzaib
              Founder, rishtaa.com
            </span>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
