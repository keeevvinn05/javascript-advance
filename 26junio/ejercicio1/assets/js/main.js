import {callAPI} from "./api.js";

const btnVer = document.getElementById("btn-ver");
const postId = document.getElementById("postId");
const output = document.getElementById("output");

btnVer.addEventListener('click', ()=>{
const id = postId.value.trim();
if(!id){
  output.textContent = "introduce un ID valido";
  return; 
}

callAPI(`/posts/${id}`)
.then(post =>{
output.textContent = JSON.stringify(post,null,2);
})
.catch(err=>{
output.textContent = "error: " + err.message;
});
});