import React from "react";
import * as Redux from "redux"
import { connect } from "react-redux";
import { addToDo, loadToDos } from "./actions.js";

var todoId = 0;

class ToDoList extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			loading: false
		}
	}

	addTodo = () => {
		this.setState({
			loading: true
		})
		this.props.addToDo({
			task: 'Test',
			id: this.props.todos ? this.props.todos.length + 1 : todoId++,
			completed: false
		}).finally(() => {
			this.setState({
				loading: false
			})
			this.props.loadToDos()
		})
	}

	renderToDoList = () => {
		return this.props.todos.map(todo => (
			<div
				key={todo.id}
				style={{ 'padding': 10 }}
			>
				id - {todo.id}
				<br/>
				task -  {todo.task}
				<br />
				completed - {todo.completed.toString()}
			</div>
		))
	}

	loadToDoList = () => {
		this.setState({
			loading: true
		})
		this.props.loadToDos().finally(() => {
			this.setState({
				loading: false
			})
		})
	}

    render() {
		const { loading } = this.state
        return (
			<div>
				<button onClick={this.loadToDoList}>
					Load ToDos
				</button>
				<button onClick={this.addTodo}>
					Add Test
				</button>
				<br />
				<br />
				{
					loading ? 
					(
						<h2 style={{ padding: 40 }}>loading.....</h2>
					):
					this.renderToDoList()}
			</div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        todos : state
    };
};

var App = connect(
    MapStateToProps,
    { addToDo, loadToDos }
)(ToDoList);


export default App;