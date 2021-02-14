import React, { Component } from "react";
import { Alert, Button, Badge } from "react-bootstrap";

import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [],
    personName: "",
    showPersons: true,
  };

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  handleNameChange = (event, id) => {
    const { persons: allPersons } = this.state;

    const personIndex = allPersons.findIndex((x) => x.id === id);
    const person = allPersons[personIndex];
    console.log(person);
    person.fullname = event.target.value;
    // allPersons[personIndex] = person;

    const persons = [...allPersons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  handleDeletePerson = (id) => {
    const newPersons = [...this.state.persons];
    let filteredPersons = newPersons.filter((p) => p.id !== id);

    this.setState({ persons: filteredPersons });
  };

  handleNewPerson = () => {
    const persons = [...this.state.persons];
    let count = persons.length;
    const person = {
      id: count++,
      fullname: this.state.personName,
    };

    if (this.state.personName == "" || this.state.personName == " ") return;

    persons.push(person);
    this.setState({ persons, personName: "" });
  };

  setPerson = (event) => {
    this.setState({ personName: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;

    let person = null;
    let badgeStyle = null;

    if (persons.length <= 1) badgeStyle = "danger";
    else if (persons.length == 2) badgeStyle = "warning";
    else if (persons.length >= 3) badgeStyle = "success";

    if (showPersons) {
      person = (
        <Persons
          persons={persons}
          handleDeletePerson={this.handleDeletePerson}
          handleNameChange={this.handleNameChange}
        />
      );
    }

    return (
      <div className="rtl text-center">
        <Alert variant="primary">
          <h2>برنامه مدیریت اشخاص</h2>
        </Alert>

        <Alert variant="light">
          <h6>
            تعداد اشخاص ثبت شده{" "}
            <Badge variant={badgeStyle} pill className="pt-1">
              {persons.length}
            </Badge>{" "}
            نفر می باشد
          </h6>
        </Alert>

        <div>
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="اسم بهم بده"
                className="form-control"
                onChange={this.setPerson}
                value={this.state.personName}
                autoFocus
                maxLength="25"
              />
              <div className="input-group-prepend">
                <Button
                  variant="success"
                  size="sm"
                  type="submit"
                  className="fa fa-plus-square"
                  onClick={this.handleNewPerson}
                ></Button>
              </div>
            </div>
          </form>
        </div>

        <Button
          onClick={this.handleShowPersons}
          variant={showPersons ? "warning" : "info"}
          className="m-4"
        >
          {showPersons ? "پنهان کردن اشخاص " : "نمایش دادن اشخاص"}
        </Button>

        {person}
      </div>
    );
  }
}

export default App;
