import { useEffect } from "react";
import Element from "../Element";

import { getTodos } from "../../api";
import { useDispatch, useSelector } from "react-redux";

import {
  setTodos,
  toggleErrorState,
  toggleLoadingState,
} from "../../store/todos/slice";

import {
  selectIsError,
  selectIsLoading,
  selectTodos,
} from "../../store/todos/selectors";

function List() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  return (
    <>
      {isLoading && !isError && (
        <div className="loader text-center my-4">
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div role="status">Loading...</div>
        </div>
      )}

      {!isLoading && !isError && (
        <div className="todoList">
          <div className="row flex-wrap">
            {todos.map((todo) => (
              <Element
                title={todo.title}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
              />
            ))}
          </div>
        </div>
      )}

      {isError && (
        <div className="alert alert-danger text-center" role="alert">
          {isError}
        </div>
      )}
    </>
  );
}

export default List;
