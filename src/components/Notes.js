import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      newNote: " ",
      showAll: true
    };
  }
  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: this.state.newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: this.state.notes.length + 1
    };
    const notes = this.state.notes.concat(noteObject);

    this.setState({
      notes,
      newNote: ""
    });
    console.log("nappia painettu");
    console.log(event.target);
  };

  handleNoteChange = e => {
    console.log(e.target.value);
    this.setState({ newNote: e.target.value });
  };

  render() {
    const notesToShow = this.state.showAll
      ? this.state.notes
      : this.state.notes.filter(note => note.important);
    const label = this.state.showAll ? "vain tärkeät" : "kaikki";
    return (
      <div>
        <h1>Muistiinpanot</h1>
        <button onClick={this.toggleVisible}>Näytä {label}</button>
        <ul>
          {notesToShow.map(note => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
        <form onSubmit={this.addNote}>
          <input value={this.state.newNote} onChange={this.handleNoteChange} />
          <button type="submit">Tallenna</button>
        </form>
      </div>
    );
  }
}

export default Notes;
