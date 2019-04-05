import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 13 },
      { id: '2', name: 'John', age: 40 },
      { id: '3', name: 'Steph', age: 70 }
    ],
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0

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


    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }

    }

    );
    console.log(persons);
    console.log(this.state.persons);


    //console.log(event.target.value);
  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }



    return (
      <Aux  >
        <button
          onClick={() => {
            this.setState({
              showCockpit: false
            });
          }}>Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.personsLength}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}


      </Aux >
    );
  }
}



export default withClass(App, classes.App);

