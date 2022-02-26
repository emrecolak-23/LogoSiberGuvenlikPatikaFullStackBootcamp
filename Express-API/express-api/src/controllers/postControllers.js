const posts = require("../data/posts");

// Create a function for return all post
getAllPosts = () => {
  return posts
}

getPostById = (id) => {
  return posts.filter(x=>x.id==id);
}

module.exports = {getAllPosts,getPostById}