import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';




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
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
      );
    }

    return (
      <div className="App" >
        <h1>Hello</h1>
        <p>It is working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}


      </div >
    );
  }
}



export default App;

