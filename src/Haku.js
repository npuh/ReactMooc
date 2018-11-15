import React, { Component } from "react";
import "./App.css";
class Haku extends Component {
  state = {
    data: []
  };

  getData = async e => {
    e.preventDefault();
    const api_call = await fetch("http://localhost:19101/Api/todo");
    const data = await api_call.json();

    this.setState({
      data: data
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <button onClick={this.getData}>Click for todos</button>
        <ul className="list">
          {this.state.data.map(todo => (
            <span key={todo.TaskId}>
              <li>{todo.TaskName}</li>
              <li>{todo.TaskDescription}</li>
              <hr />
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

export default Haku;
