import {callAPI} from "./api.js";

const btnError = document.getElementById("btn-error");
const output = document.getElementById("output");
btnError.addEventListener("click", () =>{
callAPI("/no-such-endpoint")
.then(data =>{
output.textContent = JSON.stringify(data, null,2);
})
.catch(err =>{
output.textContent = "!capturando error: " + err.message;
});
});