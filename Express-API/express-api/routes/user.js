const { application } = require('express');
const express = require('express');
const userRouter = express.Router();
const userControllers = require("../src/controllers/userControllers");
// const usersData = require('../src/data/users');
userRouter.use(express.json())
var users = userControllers.getAllUsers();
userRouter.route("/users").get((req,resp)=>{
  
    
  if (req.query.id) {
    user = users.filter(x=>x.id==req.query.id)
    resp.send(JSON.stringify(user));
  } else {
    var users = userControllers.getAllUsers();  
    resp.send(JSON.stringify(users));
  }
}).post((req,resp)=>{

    users.push(req.body);
    resp.send({message: "User added"});
  })

userRouter.get("/users/:id", (req,resp)=>{
    var user = userControllers.getUserById(req.params.id);
    resp.send(JSON.stringify(user));
})



module.exports = userRouter