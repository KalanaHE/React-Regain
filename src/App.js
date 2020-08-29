import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Switch from "@material-ui/core/Switch";
import Container from "@material-ui/core/Container";
import Nav from "./components/AppBar";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "kalana", age: 23 },
      { id: 2, name: "pinkPanther", age: 20 },
      { id: 3, name: "dumbo", age: 21 },
    ],
    toggleShow: false,
    result: "",
  };

  nameChangeHandler = (event, id) => {
    const personId = this.state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personId],
    };

    person.name = event.target.value;

    const persons = [...this.state.people];

    persons[personId] = person;

    this.setState({
      people: persons,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Container maxWidth="sm">
          <Switch
            checked={this.state.toggleShow}
            onChange={() =>
              this.setState({
                ...this.state,
                toggleShow: !this.state.toggleShow,
              })
            }
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />

          {this.state.toggleShow ? (
            this.state.people.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  index={person.id}
                  namechange={(event) =>
                    this.nameChangeHandler(event, person.id)
                  }
                  name={person.name}
                />
              );
            })
          ) : (
            <h1>Hidden</h1>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
