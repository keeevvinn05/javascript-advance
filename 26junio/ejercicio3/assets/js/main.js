import {callAPI} from "./api.js";

const form = document.getElementById("form-post")
const output = document.getElementById("output")
form.addEventListener("submit", e =>{
e.preventDefault();
const data ={
  tittle: form.title.valueOf,
  body: form.body.value,
  userId: Number(form.userId.value)
};
callAPI("/posts", {
  method: "POST",
  body: JSON.stringify(data)
})
.then(creaated =>{
output.textContent =
"creado (id esperado 101):\n" + 
JSON.stringify(creaated,null,2);
})
.catch(err=>{
output.textContent = "error: " +err.message;
})
})
