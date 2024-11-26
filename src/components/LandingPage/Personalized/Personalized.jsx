import React from "react";

function Personalized({ personalizedDatum }) {
  let image =
    personalizedDatum.id === 5 || personalizedDatum.id === 6 ? (
      <img src={personalizedDatum.image} />
    ) : (
      <div className="img">{personalizedDatum.image}</div>
    );

  // (personalizedDatum.id=5 || personalizedDatum.id=6? )
  return (
    <div>
      <div className="personalizedCard">
        {image}

        <h3>{personalizedDatum.header}</h3>
        <p>{personalizedDatum.desc}</p>
      </div>
    </div>
  );
}

export default Personalized;
