import logo from './logo.svg';
import {useState} from "react"; 
import { Container,Row,Col, Alert,Button} from 'react-bootstrap';
import{Addform} from "./components/Form/Addform.js"
import{NotToDoList} from "./components/tasklist/NotToDoList.js"
import{Tasklist} from "./components/tasklist/Tasklist.js"

import './App.css';


const App = () => {

  const [taskLists, setTaskLists] = useState([]);
  const [notToDoLists, setNotToDoLists] = useState([]); 
  const [itemToDelete, setItemToDelete] = useState([]);
  const [notToDoItemToDelete, setNotToDoItemToDelete] = useState([]);
 
  // calculate total hours
  const toDoTotalHrs = taskLists.reduce((subTtl, item) => subTtl + item.hr, 0);
  const notToDoTotalHrs = notToDoLists.reduce((subTtl, item) => subTtl + item.hr, 0);
  const totalHrs = toDoTotalHrs + notToDoTotalHrs

  const handleOnAddTask = frmDt => {
    setTaskLists([...taskLists, frmDt])
  }


    const handleOnMarkAsNotToDo = index =>{
      const item = taskLists[index];
      console.log(item);
      const newArg = taskLists.filter((item,i) => i !==index);
      setTaskLists(newArg);
      setNotToDoLists([...notToDoLists, item]);

    }

    const markAsToDo = index => {
      const item = notToDoLists[index];
      const newArg = notToDoLists.filter((item,i) => i !== index)
      setNotToDoLists(newArg)
      setTaskLists([...taskLists, item])
    }


    // add and remove item for to do list
    const handleOnChange = e => {
      const {checked, value} = e.target
      console.log(checked,value);
      if(checked) {

        return setItemToDelete([...itemToDelete, +value]);
      }

      /// remove from array
      const newList = itemToDelete.filter(item => item != value);
      setItemToDelete(newList);

    }

    /// add and remove item for not to do list 
    const handleOnChangeNotToDo = e => {

      const {checked,value} = e.target;
      console.log(checked,value);

      if(checked){
        return setNotToDoItemToDelete(
          [...notToDoItemToDelete, +value]
        );
      }
    

    // remove from array
    const newList = notToDoItemToDelete.filter(item => item != value);
    setNotToDoItemToDelete(newList);
  }

    const deleteFromTaskList = () => {
      const newArg = taskLists.filter((item,i)=>
      !itemToDelete.includes(i));
      setTaskLists(newArg);
      setItemToDelete([]);
    }

    const deleteFromNotToDoList = () => {
      const newArg = notToDoLists.filter((item,i)=>
      !notToDoItemToDelete.includes(i));
      setNotToDoLists(newArg);
      setNotToDoItemToDelete([]);
    }

    // delete item when delete button is clicked
    const deleteItems = () =>{
      if(
        window.confirm("Are you sure you want to delete the selected items?")
      ){
        // total hours from newArg
        deleteFromTaskList();
        deleteFromNotToDoList();
      }
    }
    console.log(taskLists);

  

  return (
    <div className="main">
    <Container>
    <Row>
      <Col>
      <div className="text-center mt-5">Not to do list
        </div>
        </Col>
    </Row>
    <hr />
    <Addform handleOnAddTask = {handleOnAddTask}/>
<Row>
<Col>
<Tasklist
handleOnChange={handleOnChange}
handleOnMarkAsNotToDo = {handleOnMarkAsNotToDo}
taskLists = {taskLists}
totalHrs={totalHrs}
itemToDelete={itemToDelete}
/>
</Col>
<Col>
<NotToDoList 
notToDoList={notToDoLists}
markAsToDo={markAsToDo}
totalHr= {notToDoTotalHrs}
notToDoItemToDelete={notToDoItemToDelete}
handleOnChangeNotToDo={handleOnChangeNotToDo}/>
</Col>
    </Row>
    <Row>
      <Col>
      
  <Button variant="primary" type="submit" onClick= {deleteItems}>Delete</Button>
    </Col>
    </Row>
  </Container>
  </div>
  )
  }
    
  


export default App;
