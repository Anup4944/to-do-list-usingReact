import React from 'react'
import {} from "react-bootstrap"
import { Table, Button, Alert } from 'react-bootstrap';



export const Tasklist = ({taskLists, handleOnMarkAsNotToDo, handleOnChange, totalHrs}) => {
    return (
        <>
    <h2>Task List</h2>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Task</th>
      <th>Hour</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
    taskLists.map((row, i) => (
      <tr key={i}>
      
      <td>
      <input type ="checkbox" defaultValue={i} onChange= {handleOnChange}/>{" "} 
        {row.title}</td>
      <td>{row.hr}</td>
      <td><Button 
      onClick={ () => handleOnMarkAsNotToDo(i)}
      variant="primary" type="submit">Mark As Not To</Button></td>
      
    </tr>
  


    ))
  }
    
    
  </tbody>
</Table>
<Alert variant= "primary">
      Your total allocated time = {totalHrs} / 168 hours 
  </Alert>
</>
    )
}



