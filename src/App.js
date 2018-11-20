import React from "react";
import Kurssi from "./components/Kurssi";
import Taulukko from "./Taulukko";
import Haku from "./Haku";
import Anekdootti from "./Anekdootti";
import Palaute from "./Palaute";
// import Note from "./components/Note";

const App = () => {
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
      <Kurssi kurssit={kurssit} />
      <p>Tehtäviä yhteensä: {total}</p>
      <hr />
      <Palaute />
      <hr />
      <Haku />
      <hr />
      <Anekdootti />
      <hr />
      <Taulukko />
    </div>
  );
};

export default App;
