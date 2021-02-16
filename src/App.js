import React, { Component } from "react";
import { Alert, Button, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import SimpleContext from "./context/SimpleContext";
import Persons from "./components/person/Persons";
import Header from "./components/common/Header";
import EnterName from './components/person/EnterName';

class App extends Component {
  state = {
    persons: [],
    title: "مدیریت کننده اشخاص",
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

    const persons = [...allPersons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  handleDeletePerson = (id) => {
    const newPersons = [...this.state.persons];
    let filteredPersons = newPersons.filter((p) => p.id !== id);

    this.setState({ persons: filteredPersons });

    let person = newPersons.find((p) => p.id == id);

    toast.error(`${person.fullname} با موفقیت حذف شد.`, {
      position: "top-right",
      closeButton: true,
      closeOnClick: true,
    });
  };

  handleNewPerson = () => {
    const persons = [...this.state.persons];
    let count = persons.length;
    const person = {
      id: count++,
      fullname: this.state.personName,
    };

    if (
      this.state.personName == "" ||
      this.state.personName.split("", 1) == " "
    ) {
      toast.dark(`فیلد نام خالی است یا ابتدای آن فاصله تایپ شده است.`, {
        position: "top-center",
        closeButton: true,
        closeOnClick: true,
      });
      return;
    }

    persons.push(person);

    toast.success(`${this.state.personName} با موفقیت اضافه شد.`, {
      position: "bottom-right",
      closeButton: true,
      closeOnClick: true,
    });

    this.setState({ persons, personName: "" });
  };

  setPerson = (event) => {
    this.setState({ personName: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;

    let person = null;

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
      <SimpleContext.Provider value={{state: this.state, handleShowPersons: this.handleShowPersons, handleNameChange: this.handleNameChange, handleDeletePerson: this.handleDeletePerson, handleNewPerson: this.handleNewPerson, setPerson: this.setPerson}}>
        <div className="rtl text-center">
          <Header />
          <EnterName />
          <Button
            onClick={this.handleShowPersons}
            variant={showPersons ? "warning" : "info"}
            className="m-4"
          >
            {showPersons ? "پنهان کردن اشخاص " : "نمایش دادن اشخاص"}
          </Button>
          
          {person}

          <ToastContainer />
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
