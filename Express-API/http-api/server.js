const http = require("http");
const users = require("./data/users");
const posts = require("./data/posts");


const server = http.createServer((req,resp)=>{

  switch (req.url) {
    case "/users":
      // return users json object as a string
      resp.writeHead(200,"Content-Type","application/json");
      resp.write(JSON.stringify(users));
      resp.end();
      break;
    case "/posts":
      // return posts json object as a string
      resp.writeHead(200,"Content-Type","application/json");
      resp.write(JSON.stringify(posts));
      resp.end();
      break;
    default:
      // return 404 message
      resp.writeHead(404,"Content-Type","application/json");
      resp.write(JSON.stringify({message: "Yönlendirme Hatalı."}));
      resp.end();
      break;
  }

});

server.listen(8000,"localhost", ()=>{
  console.log("Server listened");
});