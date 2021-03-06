import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  //toggleBtnRef.current.clicked





  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //http request...you can do it
    //make sure it runs only once -> add condition. if an empty array - it'll run for the first time only
    // const timer = setTimeout(() => {
    //   alert('Saved date to cloud');
    // }, 1000);

    toggleBtnRef.current.click()
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js cleanup work in effect');

    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 2');

    return () => {
      console.log('[Cockpit.js cleanup work in 2nd effect');
    };
  })

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }


  //let classes = ['red', 'bold'].join(' ');// "red bold"
  let assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //assignedClasses = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //assignedClasses = ['red bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>It is working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) =>
          <button onClick={context.login}>Login</button>
        }
      </AuthContext.Consumer>

    </div>
  )
}

export default React.memo(Cockpit);
