import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Im {props.name} and im {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  )
}


export default person;