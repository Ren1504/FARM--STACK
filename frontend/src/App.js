import './App.css';
import React , {useEffect,useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

function App() {

  const [todoList,setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc , setDesc] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:8000/api/todo')
    .then(res => {
      setTodoList(res.data)
    })
  },[]);

  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo',{'title':title,'description':desc}).then(res => console.log(res))
  }



  return (
    <div className = "App">
      <div className = "App list-group-item justify-content-center align-items-center mx-auto"
      style = {{"width":"400px","backgroundColor":"white","marginTop":"15px"}}>
        <h1 className = "card text-white bg-primary mb-3" styleName = "max-width: 20rem">
          Task Manager
        </h1>
        <h6 className = "card text-white bg-primary mb-5" styleName = "max-width: 20rem">
          FARM STACK APPLICATION
        </h6>

        <div className='card-body'>
          <h5 className = "card text-white bg-dark mb-3">Add Tasks</h5>
          <span className = "card-text">
            <input className = "mb-2 form-control titleIn" onChange ={event => setTitle(event.target.value)} placeholder='Title'/>
            <input className = "mb-2 form-control desIn" onChange ={event => setDesc(event.target.value)} placeholder='Description'/>
            <button className = "btn btn-primary mx-2 mb-4" onClick = {addTodoHandler} style = {{'borderRadius':'50px',"font-weight":"bold"}}>Add Task</button>
          </span>

          <h5 className = "card text-white bg-dark mb-3">Tasks</h5>
        </div>
            <TodoList todoList = {todoList} />
      </div>
    </div>
  );
}

export default App;
