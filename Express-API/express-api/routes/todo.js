const express = require('express');
const todoRouter = express.Router();
const todoController = require('../src/controllers/todoControllers');

var todos = todoController.getAllTodos();
todoRouter.use(express.json());
todoRouter.route("/todos").get((req,resp)=>{

  if (req.query.id) {
    var todo = todos.filter(x=> x.id == req.query.id)
    resp.send(JSON.stringify(todo));
  } else {s
    resp.send(JSON.stringify(todos));
  }

}).post((req,resp)=>{
  todos.push(req.body);
  resp.send({message: "Todo Added"});
});

todoRouter.get("/todos/:id", (req,resp)=>{
  var todo = todoController.getTodoById(req.params.id);
  resp.send(JSON.stringify(todo));
})

module.exports = todoRouter;