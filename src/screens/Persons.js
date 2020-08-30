import React from "react";
import Person from "../components/Person";

const Persons = (props) => {
  return props.toggleShow ? (
    props.people.map((person, index) => {
      return (
        <Person
          key={person.id}
          index={person.id}
          namechange={(event) => props.nameChange(event, person.id)}
          name={person.name}
        />
      );
    })
  ) : (
    <h1>Hidden</h1>
  );
};

export default Persons;
