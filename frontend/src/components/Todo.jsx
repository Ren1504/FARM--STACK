import axios from "axios";
import React from "react";
import './Todo.css';
import { useMyContext } from '../context'
function Todo({todo}) {
    const { todoList, setTodoList } = useMyContext()
    const deleteTodo = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`).then
            (res => {
                console.log(res)
                axios.get('http://localhost:8000/api/todo')
                    .then(res => {
                        setTodoList(res.data)
                    })

            })
    }

    return (
        <div className="todo m-4">
            <p>
                <span className="todo-content"><p>Task: {todo.title}</p></span>
                {todo.description}
                <button className="remove btn btn-danger" onClick={() => deleteTodo(todo.title)}>Remove</button>
                <hr></hr>
            </p>
        </div>)
}

export default Todo;

