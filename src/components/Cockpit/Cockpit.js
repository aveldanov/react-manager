import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {


  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }


  //let classes = ['red', 'bold'].join(' ');// "red bold"
  let assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //assignedClasses = ['red bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello</h1>
      <p className={assignedClasses.join(' ')}>It is working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}

export default Cockpit