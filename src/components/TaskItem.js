import React, { Component } from 'react'

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false
    };
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  }

  setIsEditing = (isEditing) => {
    this.setState({ isEditing });
  }

  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  }

  handleSubmit = (event) => {
    console.log('hi')
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setIsEditing(false);
  }

  render() {
    return (
      <tr>
        {this.state.isEditing
          ? 
            <>
              <td>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    autoFocus
                    value={this.state.task}
                    onChange={this.handleChange}
                  />
                </form>
              </td>
              <td>
                <button className="submit" type="submit" onClick={this.handleSubmit}>Save</button>
                <button className="back" type="button" onClick={() => this.setIsEditing(false)}>Back</button>
              </td>
            </>
          :
            <>
              <td className="task" onClick={this.toggleTask}>
                <input type="checkbox" readOnly checked={this.props.taskItem.isCompleted}/>
                <span className={this.props.taskItem.isCompleted ? 'completed' : 'not-completed'}>
                  {this.props.taskItem.task}
                </span>
              </td>
              <td>
                <button className="edit" onClick={() => this.setIsEditing(true)}>Edit</button>
                <button className="delete" onClick={this.deleteTask}>Delete</button>
              </td>
            </>
        }
      </tr>
    )
  }
}
     
