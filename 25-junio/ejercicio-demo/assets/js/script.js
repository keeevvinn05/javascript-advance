// -------------------------------------
// FUNCIONES CON CALLBACK
// -------------------------------------

// Definimos una función llamada leerArchivo que recibe un parámetro "callback"
// "callback" será una función que se ejecutará después de que se lea el archivo (simulado con setTimeout)
function leerArchivo(callback) {
  setTimeout(() => {
    console.log("archivo leido"); // Este mensaje aparece después de 2 segundos
    callback(); // Ejecutamos la función que pasamos como callback
  }, 2000); // Esperamos 2000 milisegundos (2 segundos)
}

// Llamamos a leerArchivo y le pasamos una función flecha como callback
// Esta función se ejecutará justo después del mensaje "archivo leido"
leerArchivo(() => {
  console.log("siguiente paso"); // Este mensaje aparece justo después de "archivo leido"
});


// -------------------------------------
// USO BÁSICO DE setTimeout
// -------------------------------------

console.log("antes"); // Este mensaje aparece inmediatamente

// Usamos setTimeout para ejecutar algo después de 3 segundos
setTimeout(() => {
  console.log("despues de 3 segundos"); // Este mensaje aparece tras 3 segundos
}, 3000); // 3000 milisegundos = 3 segundos

console.log("despues"); // Este mensaje también aparece inmediatamente, justo después de "antes"


// -------------------------------------
// PROMESAS
// -------------------------------------

// Creamos una nueva promesa y se la asignamos a la variable "promesa"
// Las promesas manejan tareas asincrónicas: algo que puede tardar (como leer un archivo, pedir datos a internet, etc.)
let promesa = new Promise((resolve, reject) => {
  // Simulamos si algo salió bien o mal
  let exito = true;

  // Esperamos 5 segundos para simular una tarea asincrónica
  setTimeout(() => {
    if (exito) {
      resolve("exito"); // Si "exito" es true, se ejecuta resolve y la promesa se cumple
    } else {
      reject("error"); // Si "exito" es false, se ejecuta reject y la promesa falla
    }
  }, 5000); // 5000 milisegundos = 5 segundos
});

// Usamos .then y .catch para manejar el resultado de la promesa
promesa
  .then((mensaje) => {
    console.log("resultado:" + resultado); // Esto se ejecuta si la promesa se resolvió bien
  })
  .catch((error) => {
    console.error("error : " + error); // Esto se ejecuta si hubo un error en la promesa
  });
