import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useSelector } from "react-redux";
import { selectTodoById } from "../../store/todos/selectors";

export default function Todo() {
    const { id } = useParams();
    const todo = useSelector((state) => selectTodoById(state, id));

    const { title } = todo;

    return (
        <div className="container">
            <div className="row">
                <Breadcrumbs />
            </div>
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <h5>{title}</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
