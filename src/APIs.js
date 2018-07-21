import axios from 'axios'

export const loadToDosAPI = () => fetch(
    '/api/todos'
).then(data => data.json());


export const addTodo = (todo) => axios.post(
    '/api/todo', {
		todo: todo
	}
);