import { createAction } from "redux-actions";
import { loadToDosAPI } from "./APIs";

export const addToDo = (val) => {
    return {
        type: "ADD",
        todo: val
    };
};

export const loadToDos = createAction('loadTodos', loadToDosAPI);
