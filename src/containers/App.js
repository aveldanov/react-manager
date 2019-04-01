import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 33 },
      { id: '2', name: 'John', age: 40 },
      { id: '3', name: 'Steph', age: 70 }
    ],
    otherState: 'some other state',
    showPersons: false

  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(prsn => {
      return prsn.id === id
    });
    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };
    // console.log(person);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState(
      { persons: persons }
    );
    console.log(persons);
    console.log(this.state.persons);


    //console.log(event.target.value);
  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }



    return (
      <div className={classes.App} >

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}


      </div >
    );
  }
}



export default App;
