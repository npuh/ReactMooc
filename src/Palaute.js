import React, { Component } from "react";

//Describin the Button and the calculations
const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;
const Statistics = ({ text1, text2, text3, hyva, huono, neutraali }) => (
  <div>
    <p>
      {text1} {hyva}
    </p>
    <p>
      {text2} {neutraali}
    </p>
    <p>
      {text3} {huono}
    </p>
  </div>
);
const Statistic = ({ keskiarvo, text, prosentit, textprosentti }) => (
  <div>
    <p>
      {text}
      {keskiarvo}
    </p>
    <p>
      {textprosentti} {prosentit}
    </p>
  </div>
);

class Palaute extends Component {
  state = {
    hyva: 0,
    neutraali: 0,
    huono: 0,
    hyvaArvo: 0,
    huonoArvo: 0,
    kaikki: 0
  };
  //Gives a good vote.
  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      hyvaArvo: this.state.hyvaArvo + 1,
      kaikki: this.state.kaikki + 1
    });
  };
  //Gives a neutral vote.
  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      kaikki: this.state.kaikki + 1
    });
  };
  //Gives a bad vote.
  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      huonoArvo: this.state.huonoArvo - 1,
      kaikki: this.state.kaikki + 1
    });
  };
  //Calculates avg of votes.
  getKeskiArvo() {
    const hyvaArvo = this.state.hyvaArvo;
    const huonoArvo = this.state.huonoArvo;
    const kaikki = this.state.kaikki;
    const summa = hyvaArvo + huonoArvo;
    let keskiarvo = summa / kaikki;
    return keskiarvo.toFixed(2);
  }
  //Calculates the procentage of all votes.
  getProsentit() {
    const hyva = this.state.hyva;
    const kaikki = this.state.kaikki;
    let prosentti = (hyva * 100) / kaikki;
    return prosentti.toFixed(1) + "%";
  }

  render() {
    const arviot = () => {
      if (this.state.kaikki !== 0) {
        return (
          <div>
            <Statistics
              text1={"Hyvä: "}
              hyva={hyva}
              text2={"Neutraali: "}
              neutraali={neutraali}
              text3={"Huono: "}
              huono={huono}
            />
            <Statistic
              text={"Keskiarvo: "}
              keskiarvo={this.getKeskiArvo()}
              textprosentti={"Hyvien määrä prosentteina: "}
              prosentit={this.getProsentit()}
            />
          </div>
        );
      } else {
        return <p>Yhtään arviota ei ole vielä annettu!</p>;
      }
    };
    const { hyva, huono, neutraali } = this.state;
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button handler={this.klikHyva} text={"Hyvä"} />
        <Button handler={this.klikNeutraali} text={"Neutraali"} />
        <Button handler={this.klikHuono} text={"Huono"} />
        <h2>statistiikka</h2>
        <div>{arviot()}</div>
      </div>
    );
  }
}

export default Palaute;
