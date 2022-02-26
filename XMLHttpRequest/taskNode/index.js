// Sending HTTP Request from an node.js server

const https = require('htttps');

https.get('https://jsonplaceholder.typicode.com/users', (resp) =>{
  let data = ""

  // A chunk of data has been received
  resp.on("data", (chunk)=>{
    data += chunk;
  });

  // The whole response has been received. Print out results
  resp.end("end",()=>{
    let dataJs = JSON.parse(data);
    console.log(dataJs);
  });

}).on("error", (err)=>{
  console.log("Error message: "+ err.message);
});