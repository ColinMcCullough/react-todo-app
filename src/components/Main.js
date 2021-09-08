import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks')) : [];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
  }

  setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  editTask = (index, task) => {
    tasks[index].task = task;
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // this.setLocalStorage('tasks', tasks);
  }

  toggleTask = (index) => {
    const task = tasks[index]
    task.isCompleted = !task.isCompleted;
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // this.setLocalStorage('tasks', tasks);
  }

  deleteTask = (idx) => {
    tasks.splice(idx, 1);
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // this.setLocalStorage('tasks', tasks);
  }

  createTask = (task) => {
    tasks.push({ task, isCompleted: false })
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // this.setLocalStorage('tasks', tasks);
  }

  render() {
    const taskListProps = {
      tasks: this.state.tasks,
      editTask: this.editTask,
      deleteTask: this.deleteTask,
      toggleTask: this.toggleTask
    }
    return (
      <div className="main">
        <h1>Todo List</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList {...taskListProps} />
        </div>
      </div>
    );
  }
}