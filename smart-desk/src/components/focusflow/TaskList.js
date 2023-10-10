// TaskList.js
import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleAddTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };

  handleDeleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks: [...tasks] });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div>
        <h2>Task List</h2>
        <div>
          <input 
            type="text" className = "status-text"
            placeholder="Add a task"
            value={newTask} 
            onChange={this.handleTaskChange}
          />
          <button className = "fancy-button" onClick={this.handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className = "fancy-button" onClick={() => this.handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
