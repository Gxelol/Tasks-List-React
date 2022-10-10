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
    tasks: [
      'Make coffee',
      'Study',
      'Drink water',
    ],
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

        <form action="#" className='form'>
          <input onChange={this.handleChange}type="text" value={newTask}/>
          <button type='submit'>
            <FaPaperPlane/>
          </button>
        </form>

        <ul className='tasks'>
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                  <FaEdit className='edit'/>
                  <FaWindowClose className='delete'/>
              </div>
            </li>
          ))},
        </ul>

      </div>
    )
  }
}
