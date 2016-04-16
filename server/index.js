var express = require("express");
var bodyParser = require('body-parser');
var _ = require("lodash");
var app = express();

var todos = [
    {
        id: 0,
        task: "test1",
        completed: false
    },
    {
        id: 1,
        task: "test2",
        completed: false
    }
];

function getTodoById(id) {
    return _.find(todos, {id: id});
}

function addTodo(todo) {
    todos.push(todo);
}

function editTodo(id, newTodo) {
    var todo = getTodoById(id);
    if (todo) {
        _.assign(todo, newTodo);
    }
}

function removeTodo(id) {
    todos = _.reject(todos, {id: id});
}

app.use(bodyParser());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get("/todos", function(req, res) {
	res.send(JSON.stringify(todos));
});

app.get("/todo/:id", function(req, res) {
    res.send(getTodoById(parseInt(req.params.id)));
});

app.put("/todo", function(req, res) {
    var todo = getTodoById(req.body.todo.id);
    if (todo) {
        editTodo(req.body.todo.id, req.body.todo);
        res.send("ok");
    } else {
        res.status(400).send("record not found");
    }
});

app.delete("/todo/:id", function(req, res) {
    var todo = getTodoById(parseInt(req.params.id));
    if (todo) {
        removeTodo(parseInt(req.params.id));
        res.send("ok");
    } else {
        res.status(400).send("record not found");
    }
});

app.post("/todo", function(req, res) {
    var todo = getTodoById(req.body.todo.id);
    if (!todo) {
        addTodo(req.body.todo);
        res.send("ok");
    } else {
        res.status(400).send("record already exists");
    }
});

var server = app.listen(3000, function(){
	console.log("server listening at : " + server.address().address + ":" + server.address().port)
});
