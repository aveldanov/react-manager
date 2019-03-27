import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>It is working</p>
        <button>Switch Name</button>
        <Person name="max" age="90" />
        <Person name="max1" age="90">I have a hobby</Person>
        <Person name="max2" age="902" />

      </div>
    );
  }
}

export default App;
