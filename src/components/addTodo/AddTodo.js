import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../../actions'

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [disabled, setDisabled] = useState(true);
    
    useEffect(() => {
        return input ? setDisabled(false) : setDisabled(true)
    }, [input])

    const addTodoHandler = (e) => {
        e.preventDefault();        
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <>
            <h1> Add Todo </h1>
            <hr />
            <form onSubmit={addTodoHandler}>
                <input type="text" name="todo" value={input} className="todoInput" placeholder="Add New Todo...." autoFocus={true} onChange={(e) => setInput(e.target.value)} />
                <button disabled={disabled} className="todoButton">Add</button>
            </form>
            <hr />   
        </>
    )
}

export default AddTodo
