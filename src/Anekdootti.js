import React, { Component } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Tää on mun oma anekdootti! :P"
];

class Anekdootti extends Component {
  state = {
    selected: 0,
    pisteet: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
    maksimi: 0
  };

  //Generates a random number and shows an anecdote in that (random number's) index of anecdotes.
  randomNumber = () => {
    let number = Math.floor(Math.random() * 7);
    this.setState({
      selected: number
    });
    console.log(number);
  };

  //This calculates the votes for each anecdote.
  vote = () => {
    let maxim = this.state.maksimi;
    let numero = this.state.selected;
    console.log("Äänen sai anekdootti numero: ", numero);
    let pointsit = this.state.pisteet;
    if (this.state.selected >= 0) {
      pointsit[numero]++;
      this.setState({
        pisteet: pointsit
      });
      console.log("Numerot: ", pointsit);

      //I know this isn't the best practise, I'll get back to this one later... Actually it doesen't even work correctly.
      maxim = Math.max(
        pointsit[0],
        pointsit[1],
        pointsit[2],
        pointsit[3],
        pointsit[4],
        pointsit[5],
        pointsit[6]
      );
      this.setState({
        maksimi: maxim
      });
    }
  };

  render() {
    const sanonnat = () => {
      if (this.state.selected >= 0) {
        return (
          <div>
            <p>Anecdote: {anecdotes[this.state.selected]}</p>
            <p>
              Max votes: {anecdotes[this.state.pisteet[this.state.maksimi]]}
            </p>
          </div>
        );
      }
    };
    const votes = () => {
      if (this.state.pisteet.length !== 0) {
        return (
          <div>
            <p>Total votes: {this.state.pisteet[this.state.selected]} </p>
            <p>Maxim votes: {this.state.maksimi}</p>
          </div>
        );
      }
    };

    return (
      <div>
        {sanonnat()}
        {votes()}
        <button onClick={this.vote}>Vote</button>
        <button onClick={this.randomNumber}>Next random anecdote</button>
      </div>
    );
  }
}

export default Anekdootti;
