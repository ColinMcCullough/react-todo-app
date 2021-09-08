import React, { Component } from 'react'
import Button from 'react-bootstrap/button'
import ButtonGroup from 'react-bootstrap/buttonGroup'
import Form from 'react-bootstrap/form'
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
                <ButtonGroup>
                  <Button className="mr-1" variant="success" type="submit" onClick={this.handleSubmit}>Save</Button>
                  <Button variant="secondary" type="button" onClick={() => this.setIsEditing(false)}>Back</Button>
                </ButtonGroup>
              </td>
            </>
          :
            <>
              <td className="task" onClick={this.toggleTask}>
                <Form>
                  <Form.Group className="" controlId="formBasicCheckbox">
                    <Form.Check
                      size="lg"
                      type="checkbox"
                      readOnly
                      checked={this.props.taskItem.isCompleted}
                      label={this.props.taskItem.task}
                      className={this.props.taskItem.isCompleted ? 'completed' : 'not-completed'}
                    />
                  </Form.Group>
                </Form>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="edit" onClick={() => this.setIsEditing(true)}>Edit</Button>
                  <Button variant="danger" onClick={this.deleteTask}>Delete</Button>
                </ButtonGroup>
              </td>
            </>
        }
      </tr>
    )
  }
}
     
