import React from "react";

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <h1>{kurssi.nimi}</h1>
      {kurssi.osat.map(osa => (
        <ul key={osa.id}>
          <li>{osa.nimi}</li>
          <li>{osa.tehtavia}</li>
        </ul>
      ))}
    </div>
  );
};

export default Kurssi;
