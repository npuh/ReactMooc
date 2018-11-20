import React from "react";

const Kurssi = ({ kurssit }) => {
  return (
    <div>
      {kurssit.kurssit}
      <h1>Opetusohjelma</h1>
      <h1>{kurssit[0].nimi}</h1>
      {kurssit[0].osat.map(osa => (
        <ul key={osa.id}>
          <li>Kurssin osa: {osa.nimi}</li>
          <li>Tehtäviä: {osa.tehtavia}</li>
        </ul>
      ))}
      <h1>{kurssit[1].nimi}</h1>
      {kurssit[1].osat.map(osa => (
        <ul key={osa.id}>
          <li>Kurssin osa: {osa.nimi}</li>
          <li>Tehtäviä: {osa.tehtavia}</li>
        </ul>
      ))}
    </div>
  );
};

export default Kurssi;
