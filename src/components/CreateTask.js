import React, { Component } from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  handleChange = (e) => {
    console.log(e)
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
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup className="mb-3">
            <FormControl
              name="task"
              placeholder="Enter Task"
              aria-label="Enter Task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <Button
              variant="outline-primary"
              disabled={!this.state.task}
              type="submit"
            >
              Add
            </Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}
