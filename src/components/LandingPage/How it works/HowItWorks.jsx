import React from "react";
import "./HowItWorks.css";

function HowItWorks({ datum, id }) {
  return (
    <div id="howItWorks">
      <div className={id % 2 === 0 ? "ecm" : "row-reverse"}>
        <div className="desc">
          <h1>{datum.header}</h1>
          <p>{datum.description}</p>
        </div>
        <div className="offset">
          <img
            className={id % 2 === 0 ? "img1" : " img2"}
            src={datum.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
