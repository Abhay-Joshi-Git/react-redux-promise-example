const ToDos = (state = [], action = {}) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.todo];
        case "loadTodos":
            return action.payload;
        default :
            return state;
    }
};

export default ToDos;