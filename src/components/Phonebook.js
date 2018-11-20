import React from "react";

class Phonebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: "Arto Hellas" }],
      newName: ""
    };
  }

  addName = e => {
    e.preventDefault();
    const newNameObject = {
      name: this.state.newName
    };
    const persons = this.state.persons.concat(newNameObject);
    this.setState({
      persons,
      newName: ""
    });
    console.log("nappia painettu");
    console.log(e.target);
  };

  handleNameChange = e => {
    console.log(e.target.value);
    this.setState({ newName: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            nimi:{" "}
            <input
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit" onClick={this.addName}>
              Lisää
            </button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
