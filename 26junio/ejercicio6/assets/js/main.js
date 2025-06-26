import { callAPI } from "./api.js";

const delId = document.getElementById("delId");
const output = document.getElementById("output");
const btnDel = document.getElementById("btnDel");

btnDel.addEventListener("click", async () => {
  const id = delId.value.trim();

  if (!id) {
    output.textContent = "Introduce un ID válido para borrar.";
    return;
  }

  try {
    await callAPI(`/posts/${id}`, { method: "DELETE" });
    output.textContent = `Post ${id} borrado (simulado).`;
  } catch (error) {
    console.error("Error al borrar el post:", error);
    output.textContent = "Ocurrió un error al intentar borrar el post.";
  }
});
