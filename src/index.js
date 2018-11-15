import React from "react";
import ReactDOM from "react-dom";
import Haku from "./Haku";
import Palaute from "./Palaute";
import Anekdootti from "./Anekdootti";

class App extends React.Component {
  render() {
    return (
      <div>
        <Palaute />
        <hr />
        <Anekdootti />
        <hr />
        <Haku />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
