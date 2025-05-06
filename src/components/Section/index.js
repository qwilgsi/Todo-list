import List from "../List";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../store/todos/slice";
import { createTodos } from "../../api";
import { selectTodos } from "../../store/todos/selectors";

function Section() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos)
  const [inputValue, setInputValue] = useState("");
;
  const addHandler = (inputValue) => {
    const newTodoItem = {
      title: inputValue,
      completed: false,
      userId: 1
    }

    createTodos(newTodoItem).then(({data})=> {
      const newTodos = [...todos, data];
      dispatch(setTodos(newTodos));
    })
  }

  return (
    <section className="bg-primary bg-gradient">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h1 className="mb-3">Awesome Todo List</h1>

                <form className="d-flex justify-content-center align-items-end mb-4">
                  <div data-mdb-input-init className="form-outline flex-fill">
                    <label className="form-label" htmlFor="form3">
                      What do you need to do today?
                    </label>
                    <input
                      type="text"
                      id="form3"
                      className="form-control form-control-lg"
                      value={inputValue}
                      onChange={(evt) => {
                        setInputValue(evt.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      addHandler(inputValue);
                    }}
                  >
                    Add
                  </button>
                </form>
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
