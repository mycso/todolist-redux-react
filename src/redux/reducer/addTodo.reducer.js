const initState = {
    todos: [],
    text: '',
    selected: undefined,
};

const setPersist = (todos) => window.localStorage.setItem('todos2', JSON.stringify(todos));
export const addTodo = (state = initState, action) => {
    switch(action.type) {
        case 'PERSIST_TODOS': 
           const todos = JSON.parse(window.localStorage.getItem("todos2"))
            return {...state, todos: todos ? todos : []}
        case 'ADD_TEXT':
            return {...state, text: action.payload};
        case 'ADD_TODO':
            const todos2 = state.todos.concat(action.payload)
            window.localStorage.setItem('todos2', JSON.stringify(todos2));
            return {...state, todos:todos2, text: ""};
        case 'DELETE_TODO':
            const todos3 = state.todos.filter((todo, i) => i !== action.payload)
            setPersist(todos3)
            return {...state, todos: todos3};
        case 'EDIT_TODO': 
            return {...state, text: state.todos[action.payload], selected: action.payload };
        case 'EDIT_ADD_TODO':
            const todos4 = state.todos.map((todo, i) => i !== action.payload.selected ? todo : action.payload.value )
            setPersist(todos4)
            return {...state.todos, todos: todos4, selected: undefined, text: "" };
        case 'DELETE_ALL': 
            setPersist([])
            return {...state, todos: [], text: "" };
        default: 
            return state;
    }
};