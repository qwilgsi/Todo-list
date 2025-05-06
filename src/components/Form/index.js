import { useRef, useState, useEffect } from "react";
import { createTodos, editTodos } from "../../api";
import { editTodo, setTodos } from "../../store/todos/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectEditedElement } from "../../store/todos/selectors";

function Form() {
  const todo = useSelector(selectEditedElement);

  const title = todo.title;

  const dispatch = useDispatch();
  const formRef = useRef();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(title || "");
  }, [title]);

  const submitHandler = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    createTodos(formJson)
      .then(({ data }) => {
        dispatch(setTodos((data)));
        setInputValue("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const saveHandler = (editTitle, id) => {
    editTodos({ title: editTitle }, id).then(({ data }) => {
      dispatch(editTodo({ id, title: data.title }));
    });
  };

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          What you do today?
        </label>
        <input
          type="text"
          className="form-control"
          id="InputText"
          aria-describedby="textHelp"
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            saveHandler(inputValue, todo.id);
          }}
        >
          Save changes
        </button>
      </div>
    </form>
  );
}

export default Form;
