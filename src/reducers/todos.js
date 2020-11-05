const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        todo: action.message,
                        completed: false
                    }
                ]
            }
        case 'DELETE_TODO':
            const todos = state.todos.filter((todo) => todo.id !== action.id)

            return {
                ...state,
                todos
            }
        case 'TOGGLE_COMPLETE_TODO':
            const updatedTodo =  {
                id: action.id,
                todo: action.message,
                completed: !action.completed
            }
            const updatedTodos = state.todos.map((todo) => {
                return todo.id === action.id ? updatedTodo : todo
            })

            return {
                ...state,
                todos: updatedTodos
            }
        default:
            return state;
    }
}

export default todoReducer;