import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //  document.querySelector('input')
    //  this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);

  }
  render() {
    console.log('[Person.js] rendering...');

    return (
      //  <div className={classes.Person} >
      //   </div>

      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}

        <p key="1" onClick={this.props.clicked}>Im {this.props.name} and im {this.props.age} years old</p>
        <p key="2">{this.props.children}</p>
        <input
          key="3"
          //ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }


}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);