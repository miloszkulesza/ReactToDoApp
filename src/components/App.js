import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać w coś',
        date: '2022-04-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'pouczyć się reacta',
        date: '2022-04-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'umyć i nawoskować auto',
        date: '2022-04-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'ogarnąć kabine auta',
        date: '2022-04-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'zrobić jedzenie do pracy',
        date: '2022-04-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'zjeść kolacje',
        date: '2022-04-29',
        important: true,
        active: true,
        finishDate: null
      }
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  }

  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
        task.important = false;
      }
    });
    this.setState({
      tasks: tasks
    });
  }

  createNewItem = (props) => {
    let tasks = [...this.state.tasks];
    const lastItem = tasks[this.state.tasks.length - 1];    
    const newItem = {
      id: lastItem.id + 1,
      text: props.text,
      date: props.date,
      active: true,
      important: props.important,
      finishDate: null
    }
    
    tasks.push(newItem);
    this.setState({
      tasks: tasks
    });
  }

  render() {
    return(
      <div className="App">
        <h1>
          TODO APP
        </h1>
        <br />
        <AddTask createNewItem={this.createNewItem} />
        <TaskList 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
