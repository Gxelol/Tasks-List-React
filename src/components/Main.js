import React, { Component } from 'react';

import Form from './Form';
import Tasks from './Tasks'

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

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

        <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        newTask={newTask}
        />

        <Tasks
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        tasks={tasks}
        />

      </div>
    )
  }
}
