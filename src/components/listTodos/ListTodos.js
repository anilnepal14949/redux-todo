import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleCompleted } from '../../actions';

const ListTodos = () => {
    const dispatch = useDispatch();
    const [todoList, setTodoList] = useState([]);

    const allTodos = useSelector(state => state.todos)
    
    const { todos } = allTodos

    useEffect(() => {
        setTodoList(todos);
    }, [todos])

    const delTodo = (id) => {
        const deleteOrNot = window.confirm("Are you sure to delete this todo?");
        if(deleteOrNot)
            dispatch(deleteTodo(id))
    }

    const toggleComplete = (id, message, completed) => {
        dispatch(toggleCompleted(id, message, completed));
        // setCompleted(!completed);
    }

    return (
        <> 
            { todoList.length > 0 ? <div><h1> Todos List </h1> <h3>(Click to mark as complete)</h3></div> : ""}
            <ul className="todosList">
                {
                    todoList.map((todo) => (
                        <div class="todoListItem">
                            <li key={todo.id} onClick={() => toggleComplete(todo.id, todo.todo, todo.completed)} className={todo.completed ? "completed" : "" }><span className="todoTitle">{todo.todo}</span></li>
                            <button onClick={() => delTodo(todo.id)}> Delete </button>
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default ListTodos
