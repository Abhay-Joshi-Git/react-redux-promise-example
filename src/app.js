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
                    () => this.props.addToDo('Test')
                }>
                    Add Test
                </button>
                <br />
                <br />
                {this.props.todos.map(todo => <div key={todoId++}>{todo}</div>)}
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

