const getBtn = document.querySelector("#get-btn");

const getData = () => {

  const xhr = new XMLHttpRequest(); // XMLHttpRequest Global Constructor Function
  xhr.open("GET","https://jsonplaceholder.typicode.com/users"); // we start calling
  xhr.onload = () => {
    const data = JSON.parse(xhr.response); // Transform json data to javascript object
    console.log(data);
  } // Like xhr.addEventListener, but addEventListener isnot supported all browser 

  
  xhr.send(); // Send request

}

getBtn.addEventListener("Click",getData());


