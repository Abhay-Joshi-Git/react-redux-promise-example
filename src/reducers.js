const ToDos = (state = [], action = {}) => {
    switch (action.type) {
		case "ADD": 
			console.log('adding todo ...', action.payload)
			return [...state, action.payload];
        case "loadTodos":
            return action.payload;
        default :
            return state;
    }
};

export default ToDos;