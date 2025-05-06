import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { deleteTodo, setComplete, setEdited } from "../../store/todos/slice";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../../api";

function Element({ title, id, completed }) {
  const [isChecked, setIsChecked] = useState(completed);

  let location = useLocation();

  const dispatch = useDispatch();

  const statusHandler = (id) => {
    dispatch(setComplete({ id }));
  };

  const deleteHandler = (id) => {
    deleteTodos(id).then(() => {
      dispatch(deleteTodo({ id }));
    });
  };

  const editHandler = (title, id) => {
    dispatch(setEdited({ title, id }));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
      <div
        className="d-flex align-items-center"
        onClick={() => {
          statusHandler(id);
          setIsChecked(!isChecked);
        }}
        style={{ cursor: "pointer" }}
      >
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            statusHandler(id);
            setIsChecked(!isChecked);
          }}
          aria-label="..."
        />
        <span
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {title}
        </span>
      </div>
      <a href="#!" data-mdb-tooltip-init title="Remove item">
        <i className="fas fa-times text-primary"></i>
      </a>
      <button
        type="button"
        className="btn btn-primary ms-auto me-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          editHandler(title, id);
        }}
      >
        Edit
      </button>

      <Link to={location.pathname + "/" + id} className="btn btn-primary">
        Show
      </Link>
      <button
        type="button"
        className="btn btn-danger  ms-3"
        onClick={() => {
          deleteHandler(id);
        }}
      >
        &times;
      </button>
    </li>
  );
}

export default Element;
