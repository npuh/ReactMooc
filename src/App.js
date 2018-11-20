import React from "react";
import Kurssi from "./components/Kurssi";
import Taulukko from "./Taulukko";
import Haku from "./Haku";
import Anekdootti from "./Anekdootti";
import Palaute from "./Palaute";
import Note from "./components/Note";

const App = () => {
  const kurssi = {
    nimi: "Half Stack -sovelluskehitys",
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
      },
      {
        nimi: "Mun oma",
        tehtavia: 10000,
        id: 4
      }
    ]
  };

  return (
    <div>
      <Kurssi kurssi={kurssi} />
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
