import React, { Component } from 'react';
import {Icon} from 'react-fa';
import './ToDoItem.css';

class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: true
      }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
     this.setState({
       checked: !this.state.checked
      });
    }

  render() {
    const checkIcon = this.state.checked ? (<Icon name="check"/>) : '';
    return (
      <li>
        <h3 onClick={this.props.remove} className="textlist">
        {checkIcon}
        {this.props.itemList}
      </h3>
      </li>
    );
  }
}

export default ToDoItem;
