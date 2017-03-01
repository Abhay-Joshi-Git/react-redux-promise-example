import { createAction } from "redux-actions";
import { loadToDosAPI } from "./APIs";

export const addToDo = (val) => {
    return {
        type: "ADD",
        todo: val
    };
};

export const loadToDos = createAction('loadTodos', loadToDosAPI);
//simplified version of action creator
// export const loadToDos = () => {
//     return loadToDosAPI().then(data => {
//         return {
//             type: 'loadTodos',
//             payload: data
//         };
//     })
// }
//console.log(loadToDos)
