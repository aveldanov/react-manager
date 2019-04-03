import React, { Component } from 'react';
//import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      //  <div className={classes.Person} >
      //   </div>

      <Aux>
        <p key="1" onClick={this.props.clicked}>Im {this.props.name} and im {this.props.age} years old</p>
        <p key="2">{this.props.children}</p>
        <input
          key="3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }


}


export default Person;