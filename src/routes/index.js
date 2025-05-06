import { createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from "react-router-dom";

import AppLayout from "../layouts/AppLayout/index"
import General from "../pages/General"
import Todos from "../pages/Todos"
import Todo from "../pages/Todo"
import FAQ from "../pages/FAQ"


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<General/>}/>
            <Route path="todos" element={<Todos/>}/>
            <Route path="todos/:id" element={<Todo/>}/>
            <Route path="faq" element={<FAQ/>}/>
        </Route>
    )
);
