import React, { Component } from 'react';

class ToDo extends Component{
  render() {
    return (
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <a href="#" onClick={e => this.props.deleteTodo(e, this.props.index)}>
        Delete
      </a>
       </li>
    );
  }
}

export default ToDo;
