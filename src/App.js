import React from "react";
import Kurssi from "./components/Kurssi";
import Taulukko from "./Taulukko";
import Haku from "./Haku";
import Anekdootti from "./Anekdootti";
import Palaute from "./Palaute";

const App = ({ kurssit }) => {
  return (
    <div>
      <Kurssi kurssit={kurssit} />

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
