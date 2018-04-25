import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listToDo: null,
      item: []
    }
  }

  addText = event => {
    this.setState({
      list: event.target.value
    })
  }

  addNote = () => {
    this.setState( prevState => { return {
      item: [...prevState.item, prevState.list],
      list: ''
    }})
  }

  remove = index => {
    const item = [...this.state.item]
    item.splice(index, 1)
    this.setState({ item: item})
  }


  render() {
    return (
      <div className="List">
        <header>
          <h2 className="Date">9 Lunes Abril, 2018</h2>
        </header>
      <div className="Notes">
            {this.state.item.map((itemList, index) => <ToDoItem key={index} itemList={itemList}
            remove={()=>{this.remove(index)}}/>
        )}
      </div>
      <div className="AddNotes">
        <label>Nueva tarea</label>
        <input value={this.state.list} onChange={this.addText} type="text"/>
        <button className="button-add" onClick={this.addNote}>Añadir</button>
      </div>
    </div>

)
}
}

export default App;
