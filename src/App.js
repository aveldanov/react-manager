import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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

  deletePersonHandler(personIndex) {
    //const persons = this.state.persons.slice(); //creating a copy of the state
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })


    // console.log(persons);
    // console.log(this.state.persons);


  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let btnClass = '';

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person

                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}


        </div>
      );
      btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' ');// "red bold"
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //assignedClasses = ['red bold']
    }

    return (
      <div className={classes.App} >
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>It is working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}


      </div >
    );
  }
}



export default App;

