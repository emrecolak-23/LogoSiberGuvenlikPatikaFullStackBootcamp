const todos = require("../data/todos");

getAllTodos = () =>{
  return todos;
}

getTodoById = (id) => {
  return todos.filter(x=> x.id==id);
}

module.exports = {getAllTodos,getTodoById}