import axios from "axios";
import React from "react";

function Todo(props)
{
    const deleteTodo = (title) =>
    {
        axios.delete(`http://localhost:8000/api/todo/${title}`).then
        (res => console.log(res))
    }

    return(
        <div>
            <p>
                <span style = {{'font-weight':'bold,underlined'}}>{props.todo.title} :</span>
                {props.todo.description}
                <button className = "btn btn-danger my-2 mx-2" style = {{'borderRadius':'50px'}} onClick ={() => deleteTodo(props.todo.title)}>X</button>
                <hr></hr>
            </p>
        </div>)
}

export default Todo;

