import React, { useEffect, useState } from "react";
import "./Firstpage.css";
import Ellipse from "../../../assets/Ellipse.png";
import GirlImage from "../../../assets/girl with basket.png";

const Firstpage = () => {
  const texts = ["client's", "inventory", "notifications and"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="firstPageCont">
      <div className="firstPage">
        <div className="writeUpCont">
          <h1 className="writeUp">
            Manage <span>{texts[currentTextIndex]}</span> track orders of your
            laundry operations all in one place
          </h1>
          <div className="buttons">
            <a href="#">Get Started</a>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="girlImage">
          <img src={Ellipse} alt="Ellipse" />
          <img src={GirlImage} alt="Girl with basket" />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
