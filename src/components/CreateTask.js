import React, { Component } from 'react'

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="task"
          type="text"
          placeholder="Enter Task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button
          className="add"
          type="submit"
          disabled={!this.state.task}
        >
          Add
        </button>
      </form>
    )
  }
}
