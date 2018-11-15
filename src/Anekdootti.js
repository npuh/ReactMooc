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
    pisteet: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  randomNumber = () => {
    let number = Math.floor(Math.random() * 7);
    this.setState({
      selected: number
    });
    console.log(number);
  };

  vote = () => {
    let numero = this.state.selected;
    console.log("Äänen sai anekdootti numero: ", numero);
    let pointsit = this.state.pisteet;
    if (this.state.selected >= 0) {
      pointsit[numero]++;
      this.setState({
        pisteet: pointsit
      });
      console.log(pointsit);
    }
  };

  render() {
    const sanonnat = () => {
      if (this.state.selected >= 0) {
        return <p>{anecdotes[this.state.selected]}</p>;
      }
    };
    const votes = () => {
      if (this.state.pisteet.length !== 0) {
        return <p>Total votes: {this.state.pisteet[this.state.selected]}</p>;
      }
    };

    // const mostVotes = () => {

    // let mx = Math.max.apply(Math, pointsit);
    // console.log("Max: ", mx);
    //   let numero = Math.max(this.state.pointsit);
    //   console.log("Max: ", numero);
    //   let dootti = anecdotes[this.state.selected];
    //   console.log("Most votes: ", dootti);
    // };

    return (
      <div>
        {sanonnat()}
        {votes()}
        {/* {mostVotes()} */}
        <button onClick={this.vote}>Vote</button>
        <button onClick={this.randomNumber}>Next random anecdote</button>
      </div>
    );
  }
}

export default Anekdootti;
