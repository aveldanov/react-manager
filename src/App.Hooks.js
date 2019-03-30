import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';





const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 33 },
      { name: 'John', age: 40 },
      { name: 'Steph', age: 70 }
    ],
    otherState: 'some other state'
  });

  useState({ otherState2: "some other state2" })

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Max1', age: 33 },
        { name: 'John', age: 41 },
        { name: 'Steph', age: 70 }
      ]
    });
  }


  return (
    <div className="App">
      <h1>Hello</h1>
      <p>It is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I have a hobby</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

    </div >
  );
}



export default app;



 // switchNameHandler = () => {
  //   //console.log('');
  //   this.setState({
  //     persons: [
  //       { name: 'Max1', age: 33 },
  //       { name: 'John', age: 40 },
  //       { name: 'Steph', age: 70 }
  //     ]
  //   });


  //   console.log(this.state.persons);

  // }

  // class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 33 },
//       { name: 'John', age: 40 },
//       { name: 'Steph', age: 70 }
//     ],
//     otherState: 'some other state'
//   