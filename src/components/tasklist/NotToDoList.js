import React from 'react'
import { Table,Button, Alert } from 'react-bootstrap';

export const NotToDoList = ({notToDoList,markAsToDo,handleOnChangeNotToDo, totalHr}) => {

  console.log(notToDoList);
    return (
    <>
        <h2>Not To Do</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Task</th>
          <th>Hour</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        
    {notToDoList.map((row, i) => (
      <tr key={i}>
      <td>
      <input type ="checkbox" defaultValue={i} onChange= {handleOnChangeNotToDo}/>{" "} 
      
      <label>{row?.title}</label>
      </td>

      <td>
      {row?.hr}
      </td>
      <td><Button 
      onClick={ () => markAsToDo(i)}
      variant="primary" type="submit">Mark As To Do</Button></td></tr>
    ))
}
     
</tbody>
    </Table>
    <Alert variant= "info">
    Total time saved = {totalHr}
  </Alert>

    <p varient="secondary"></p>
    </>
       
    )
}
