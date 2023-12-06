import React, { useState, useEffect } from "react";
import "./popupbanner.css"; // Import your CSS file

function PopupBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the banner after a delay (e.g., 5 seconds)
    const hideTimeout = setTimeout(() => {
      setIsBannerVisible(false);
    }, 5000); // Adjust the delay as needed

    // Clear the timeout if the component unmounts
    return () => {
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className={`popup-banner ${isBannerVisible ? "visible" : ""}`}>
      <span className="popup-text">For Paid Services, Click Here</span>
    </div>
  );
}

export default PopupBanner;
