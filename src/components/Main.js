import React, { Component } from 'react';

//Form
import { FaPaperPlane } from 'react-icons/fa'

//Tasks
// eslint-disable-next-line no-unused-vars
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const  deleteTasks  = [...tasks];
    deleteTasks.splice(index, 1);

    this.setState({
      tasks: [...deleteTasks],
    });
  }

  handleEdit = (e, index) => {
    const {tasks} = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1 ) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }

  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className='main'>
        <h1>Tasks List</h1>

        <form onSubmit={this.handleSubmit} action="#" className='form'>
          <input onChange={this.handleChange}type="text" value={newTask}/>
          <button type='submit'>
            <FaPaperPlane/>
          </button>
        </form>

        <ul className='tasks'>
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                  <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit'/>
                  <FaWindowClose onClick={(e) => this.handleDelete( e, index)} className='delete'/>
              </span>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
