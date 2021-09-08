import React, { Component } from 'react'
import TaskItem from './TaskItem'
import Table from 'react-bootstrap/table'

export default class TaskList extends Component {
  render() {
    return <Table striped bordered >
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.tasks.map((task, index) => {
          const taskItemProps = {
            key: index,
            taskItem: task,
            id: index,
            deleteTask: this.props.deleteTask,
            editTask: this.props.editTask,
            toggleTask: this.props.toggleTask
          }
          return <TaskItem {...taskItemProps}/>
        })}
      </tbody>
    </Table>
  }
}
