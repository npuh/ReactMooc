import React from "react";

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;
const Input = ({ handler, value }) => (
  <input onChange={handler} value={value} />
);

class Phonebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Arto Hellas", phonenumber: "111" },
        { name: "Nina Puhakka", phonenumber: "222" }
      ],
      newName: "",
      checked: false
    };
  }

  addName = e => {
    e.preventDefault();
    this.checkName();
  };

  //This checks if a name is already in the phonebook
  checkName() {
    const newPersonObject = {
      name: this.state.newName,
      phonenumber: this.state.newPhone
    };
    console.log("new name", newPersonObject);
    let checked = this.state.checked;
    const people = this.state.persons;
    people.forEach(function(nimi, index, array) {
      console.log("nimi: ", nimi, "index", index);
      if (newPersonObject.name === nimi.name) {
        alert("Nimi on jo listassa!");
        console.log("virheen jälkeen ihmiset", people);
        return (checked = false);
      } else {
        return (checked = true);
      }
    });
    if (checked === true) {
      const persons = this.state.persons.concat(newPersonObject);
      this.setState({
        persons
      });
    } else {
      const persons = this.state.persons;
      this.setState({
        persons
      });
    }
  }

  handleNameChange = e => {
    const name = e.target.value;
    console.log("Name", name);
    this.setState({ newName: name });
  };

  handlePhoneNumberChange = e => {
    const phonenumber = e.target.value;
    console.log("Number", phonenumber);
    this.setState({ newPhone: phonenumber });
  };
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            Nimi:
            <Input handler={this.handleNameChange} value={this.value} />
          </div>
          Puhelinnumero:{" "}
          <Input
            handler={this.handlePhoneNumberChange}
            phonenumber={this.value}
          />
          <div>
            <Button type="submit" handler={this.addName} text={"Lisää"} />
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.name}>
              {person.name}, pnro: {person.phonenumber}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
