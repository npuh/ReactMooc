import React from "react";

const Kurssi = () => {
  const kurssit = [
    {
      nimi: "Half Stack -sovelluskehitys",
      id: 1,
      osat: [
        {
          nimi: "Reactin perusteet",
          tehtavia: 10,
          id: 1
        },
        {
          nimi: "Tiedonvälitys propseilla",
          tehtavia: 7,
          id: 2
        },
        {
          nimi: "Komponenttien tila",
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: "Node.js",
      id: 2,
      osat: [
        {
          nimi: "Routing",
          tehtavia: 3,
          id: 1
        },
        {
          nimi: "Middlewaret",
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ];
  //Calculates the total amount of tehtavia.
  const calculate = kurssit[0].osat.reduce((total, amount) => {
    return (total += amount.tehtavia);
  }, 0);
  const calc2 = kurssit[1].osat.reduce((total, amount) => {
    return (total += amount.tehtavia);
  }, 0);

  const total = calculate + calc2;
  console.log("Total: ", total);

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
      <p>Tehtäviä kurssissa: {calculate}</p>
      <h1>{kurssit[1].nimi}</h1>
      {kurssit[1].osat.map(osa => (
        <ul key={osa.id}>
          <li>Kurssin osa: {osa.nimi}</li>
          <li>Tehtäviä: {osa.tehtavia}</li>
        </ul>
      ))}
      <p>Tehtäviä kurssissa: {calc2}</p>
      <p>
        <b>Tehtäviä yhteensä: {total}</b>
      </p>
    </div>
  );
};

export default Kurssi;
