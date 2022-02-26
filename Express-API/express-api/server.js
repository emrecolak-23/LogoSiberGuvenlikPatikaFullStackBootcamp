const express = require('express');

// Create express app
const app = express();

app.get("/", (req,resp)=>{
  resp.send("operating get")
});

app.post("/", (req,resp)=>{
  resp.send("operating post");
});

// Call Routes
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const todoRouter = require("./routes/todo");
// Use routes in app
app.use(userRouter);
app.use(postRouter);
app.use(todoRouter);

// Declare and define port number
const PORT = 7000

// Listening Server
app.listen(PORT);