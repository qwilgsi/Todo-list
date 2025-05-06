import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    completed: false,
    EditedElement: {title: "", id: ""},
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos(state, action) {
            state.data = action.payload;
        },
        setComplete(state, action){
            const { id } = action.payload;
            const todo = state.data.find((item) => item.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo(state, action) {
            const { id, title } = action.payload;
            const todo = state.data.find((item) => item.id === id);
            if (todo) {
                todo.title = title;
            }
        },
        deleteTodo(state, action) {
            const { id } = action.payload;
            state.data = state.data.filter((item) => item.id !== id);
        },
        toggleErrorState(state){
            state.isError = !state.isError;
        },
        toggleLoadingState(state) {
            state.isLoading = !state.isLoading;
        },
        setEdited(state, action) {
            state.EditedElement = action.payload;
        },
    },
});

export const {setTodos, setComplete, editTodo, deleteTodo, setEdited, toggleErrorState, toggleLoadingState} = todosSlice.actions;

export default todosSlice.reducer;