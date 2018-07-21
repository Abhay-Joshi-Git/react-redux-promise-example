import { createAction } from "redux-actions";
import { loadToDosAPI, addTodo } from "./APIs";

export const addToDo = (todo) => {
	return addTodo(todo).then(() => {
		return {
			type: "ADD",
			payload: todo
		}
	})
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
