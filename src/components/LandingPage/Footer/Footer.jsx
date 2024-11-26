import React, { useState } from "react";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter, FaArrowUp } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const [subscribe, setSubscribe] = useState("Subscribe");

  //To track input validation
  const [value, setValue] = useState("");

  const handleValue = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  //Setting state of button to subscribed
  const handleSubscribe = () => {
    setSubscribe("Subscribed!");
    setTimeout(() => setSubscribe("Subscribe"), 3000);
  };

  const preventDefault = (event) => {
    event.preventDefault();

    // Check if the email contains '@gmail.com' or '@yahoo.com'
    value.includes("@gmail.com") || value.includes("@yahoo.com")
      ? handleSubscribe()
      : alert("Please enter a valid email with @gmail.com or @yahoo.com");
  };
  return (
    <footer>
      <div className="footerWrap">
        <div>
          <p className="footerHead">Follow CleanTrack</p>
          <div className="socials">
            <a href="#">
              <CiLinkedin />
            </a>
            <a href="#">
              <CiFacebook />
            </a>
            <a href="#">
              <CiInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="Newsletter">
          <p className="footerHead">Subscribe to Newsletter</p>
          <form onSubmit={preventDefault}>
            <input
              type="email"
              value={value}
              onChange={handleValue}
              placeholder="Enter email address"
            />
            <button type="submit">{subscribe}</button>
          </form>
        </div>
      </div>
      <div className="FooterLinks">
        <a href="#top" className="top">
          GO TO TOP
          <FaArrowUp style={{ fontSize: "10px" }} />
        </a>
        <div className="bottomLinks">
          <a href="#">How it works</a>
          <a href="#">About</a>
          <a href="#">Customer's review</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
