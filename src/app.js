import React from "react";
import * as Redux from "redux"
import { connect } from "react-redux";
import { addToDo, loadToDos } from "./actions.js";

var todoId = 0;

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={
                    () => this.props.loadToDos()//.loadToDos()
                }>
                    Load ToDos
                </button>
                <button
                    onClick={
                    () => this.props.addToDo({
                        task: 'Test',
                        id: this.props.todos ? this.props.todos.length + 1 : todoId++,
                        completed: false
                    })
                }>
                    Add Test
                </button>
                <br />
                <br />
                {this.props.todos.map(todo =>
                    <div
                        key={todo.id}
                        style={{
                            'padding': 10
                        }}
                    >
                        id - {todo.id}
                        <br/>
                        task -  {todo.task}
                        <br />
                        completed - {todo.completed.toString()}
                    </div>)
                }
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        todos : state//["changed", "diff"]
    };
};


var App = connect(
    MapStateToProps,
    { addToDo, loadToDos }
)(ToDoList);


export default App;


//const AppOriginal = () => (
//    <div>
//        <button
//            onClick={
//                () => {store.dispatch({type: "ADD", todo: "Test"})}
//            }
//            >
//            Add Test
//        </button>
//
//        <br />
//        <br />
//
//        {store.getState().map(todo => <div key={todoId++}>todo</div>)}
//
//
//    </div>
//
//);
