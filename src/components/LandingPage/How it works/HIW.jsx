import React from "react";
import ecm from "../../../assets/ecm.png";
import sot from "../../../assets/sot.png";
import SI from "../../../assets/SI.png";
import HowItWorks from "./HowItWorks";

function HIW() {
  const data = [
    {
      id: 1,
      image: ecm,
      header: `Easy client management`,
      description: `Add new clients effortlessly and keep all their details organized in one secure place. Cleantrack makes it easy to add, edit or search for a client`,
    },
    {
      id: 2,
      image: sot,
      header: `Seamless Order Tracking`,
      description: `Track every order from start to finish. Assign unique IDs, monitor the status, and keep your clients informed with automatic updates. You'll never lose track of an order again.`,
    },
    {
      id: 3,
      image: SI,
      header: `Simplified Inventory`,
      description: `Manage your laundry inventory with ease. Enter items manually or choose from a dropdown menu, and let CleanTrack handle the rest. Stay on top of your stock and pricing with our intuitive system.`,
    },
  ];

  return (
    <div className="howItWorksWrapper">
      <h1>How it works</h1>
      {data.map((datum) => (
        <HowItWorks key={datum.id} datum={datum} id={datum.id} />
      ))}
    </div>
  );
}

export default HIW;
