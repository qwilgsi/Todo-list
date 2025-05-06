import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/todos/slice";
import { getTodos } from "./api";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos()
      .then(({ data }) => {
        const todos = data.slice(0, 10); // или все
        dispatch(setTodos(todos));
      })
      .catch((error) => {
        console.error("Ошибка загрузки задач с API:", error);
      });
  }, []);

  return (
    <>
      <Header />
      {children}
      <Modal>
        <Form />
      </Modal>
      <Footer />
    </>
  );
}

export default App;
