import React, {useState} from 'react';
import {Row, Col, Form, Button} from "react-bootstrap"

const initialFormData = {
    title: "dddd",
    hr:5,

};


export const Addform = ({handleOnAddTask}) => {
    const [task, setTask] = useState(initialFormData);

    const handleOnSubmit = e => {
        e.preventDefault();
        handleOnAddTask(task);
    }


    const handleOnChange = e =>{
        const{name,value} = e.target; // will get value from input feild
        setTask({
            ...task,  // spread operator
            [name]: value, 
        })
        console.log(name,value);
    }


    return(
        <Form onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control value={task.title} onChange= {handleOnChange}
      name="title"  placeholder="Task Name" />
    </Col>
    <Col>
      <Form.Control value={task.hr} onChange= {handleOnChange}
      name="hr" placeholder="Number of Hours" />
    </Col>
    <Col>
    <Button variant="primary" type="submit">ADD</Button>
    </Col>
  </Row>
</Form>
    )
}