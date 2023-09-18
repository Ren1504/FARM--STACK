import Todo from './Todo';

function TodoList(props)
{
    return(
        <div className = "d-flex align-items-center justify-content-space-between">
                {props.todoList.map(((todo,index) => <Todo todo = {todo} key = {index}/> ))}
        </div>)
}

export default TodoList;