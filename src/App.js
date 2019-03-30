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

  switchNameHandler = () => {
    //console.log('');
    this.setState({
      persons: [
        { name: 'Max1', age: 33 },
        { name: 'John', age: 40 },
        { name: 'Steph', age: 70 }
      ]
    });
    console.log(this.state.persons);
  }

  render() {
    return (
      <div className="App" >
        <h1>Hello</h1>
        <p>It is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I have a hobby</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div >
    );
  }
}



export default App;

