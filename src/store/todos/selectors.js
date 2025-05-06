export const selectIsLoading = (state) => state.todos.isLoading;
export const selectIsError = (state) => state.todos.isError;
export const selectTodos = (state) => state.todos.data;
export const selectTodoById = (state, id) => state.todos.data.find((item) => item.id === Number(id));
export const selectEditedElement = (state) => state.todos.EditedElement;