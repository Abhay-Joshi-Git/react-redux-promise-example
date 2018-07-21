const ToDos = (state = [], action = {}) => {
    switch (action.type) {
        case "loadTodos":
            return action.payload;
        default :
            return state;
    }
};

export default ToDos;