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
        { name: "Nina Puhakka", phonenumber: "222" },
        { name: "Nina Plaaplaa", phonenumber: "333" }
      ],
      checked: false,
      search: ""
    };
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  //Adds a new name to the phonebook
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
    people.forEach(function(nimi, index) {
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
    let filteredNames = this.state.persons.filter(person => {
      return person.name.indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            Rajaa näytettäviä:
            <Input
              handler={this.updateSearch.bind(this)}
              value={this.state.search}
            />
            <Button text={"Rajaa"} />
          </div>
          <h2>Lisää uusi nimi luetteloon</h2>
          <div>
            Nimi:
            <Input handler={this.handleNameChange} value={this.value} />
          </div>
          Numero:{" "}
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
          {filteredNames.map(person => (
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
