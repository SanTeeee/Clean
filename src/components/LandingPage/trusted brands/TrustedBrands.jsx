import React from "react";
import "./TrustedBrands.css";
import sunlight from "../../../assets/sunlight.png";
import viva from "../../../assets/viva.png";
import nexus from "../../../assets/nexus.png";
import payout from "../../../assets/payout.png";

const TrustedBrands = () => {
  return (
    <div>
      <div className="trustedBrands">
        <p>Trusted by:</p>
        <div className="brandImages">
          <img src={sunlight} alt="" />
          <img src={viva} alt="" />
          <img src={nexus} alt="" />
          <img src={payout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
