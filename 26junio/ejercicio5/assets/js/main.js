import { callAPI } from "./api.js";

const btnListar = document.getElementById("btn-listar");
const output= document.getElementById("output"); // ¡Esto faltaba!


btnError.addEventListener("click", async () => {
  try {
    const data = await callAPI("/posts");
  output.textContent = JSON.stringify(data, null, 2)
  } catch (err){
    output.textContent = "error: " + err.message;
  }
});
