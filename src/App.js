import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';




class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 33 },
      { name: 'John', age: 40 },
      { name: 'Steph', age: 70 }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    //console.log('');
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'John', age: 40 },
        { name: 'Steph', age: 70 }
      ]
    });
    console.log(this.state.persons);
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 33 },
        { name: event.target.value, age: 40 },
        { name: 'Steph', age: 70 }
      ]
    });
    console.log(event.target.value);

  }

  render() {
    return (
      <div className="App" >
        <h1>Hello</h1>
        <p>It is working</p>
        <button onClick={() => this.switchNameHandler("MAX111")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'MAX22222')}
          changed={this.nameChangedHandler}
        >I have a hobby</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div >
    );
  }
}



export default App;

