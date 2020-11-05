const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO'

export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id: Math.random()
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});

export const toggleCompleted = (id, message, completed) => ({
    type: TOGGLE_COMPLETE_TODO,
    id,
    message,
    completed
})