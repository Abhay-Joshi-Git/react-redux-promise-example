export const loadToDosAPI = () => fetch(
    'http://localhost:3000/todos'
).then(data => data.json());
