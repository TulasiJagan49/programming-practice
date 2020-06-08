let name = prompt("What is your name?");
let d = new Date();
let helloString = `Hello ${name}`

let heading = document.getElementById("heading")
heading.insertAdjacentHTML('beforeend', "<h1> Today's date is " + d.getDate() + " - " + d.getMonth() + " - " + d.getFullYear() + "</h1>");

let p = document.createElement("p");
let t = document.createTextNode(`Hello, ${name}`);
p.appendChild(t)
heading.appendChild(p);

let todo_list = []
