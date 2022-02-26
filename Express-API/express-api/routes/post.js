const { query } = require("express");
const express = require("express");
// declare postRouter
const postRouter = express.Router();
// call post controller
const postController = require("../src/controllers/postControllers");
  // assign getAllPost function return value to post
var posts = postController.getAllPosts();
postRouter.use(express.json());

postRouter.route("/posts").get((req,resp)=>{
  // return post
  resp.send(JSON.stringify(posts));
}).post((req,resp)=>{
  posts.push(req.body);
  resp.send({message: "Post added"});
})



postRouter.get("/posts/:id", (req,resp)=>{
  // post using id
  var post = postController.getPostById(req.params.id);
  resp.send(JSON.stringify(post));
});

module.exports = postRouter;