//1.helado
console.log("🧒 Pidiendo un helado...");

setTimeout(() => {
  console.log("🍦 Helado entregado después de 3 segundos ✅");
}, 3000);

console.log("⏳ Esperando el helado...");

//2. helado

function pedirHelado(callback) {
  //console.log("🧒 Pidiendo un helado...");

  setTimeout(() => {
    console.log("✅ Helado listo 🍦");
    callback(); 
  }, 6000);
}


function llamar() {
  console.log("📞 Te llaman: ¡Tu helado ya está aquí!");
}

pedirHelado(llamar);

//3. helado con promise y callback

function llamar(mensaje) {
  console.log("📞 Te llaman: " + mensaje);
}

function pedirHelado() {
  return new Promise((resolve, reject) => {
    //console.log("🧒 Pidiendo un helado...");

    let hayHelado = false; 

    setTimeout(() => {
      if (hayHelado) {
        resolve("✅ Tu helado está listo 🍦");
      } else {
        reject("❌ No queda helado, lo siento 😢");
      }
    }, 3000);
  });
}

pedirHelado()
  .then((mensaje) => {
    llamar(mensaje);
  })
  .catch((error) => {
    llamar(error);
  });