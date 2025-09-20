//1.- Crea una función descargarArchivo(tamaño) que devuelva una promesa.

//CREACIÓN DE FUNCIÓN PARA ALMACENAR EL TAMAÑO DE LA DESCARGA
function descargarArchivo(tamaño) {
    //CREACIÓN DE LA PROMESA, PARA QUE REGRESE EL RESULTADO POSITIVO Y NEGATIVO
  return new Promise((resolve, reject) => {
    //CONDICIONAL PARA LAS DOS POSIBILIDADES
    if (tamaño <= 50) {
      resolve("Descarga completada");
    } else {
      reject("El archivo es demasiado grande");
    }
  });
}

//CASO EXITOSO
descargarArchivo(30)
  .then((mensaje) => { //ARROJA LO QUE SE RESUELVA
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//CASO FALLIDO
descargarArchivo(80)
  .then((mensaje) => { //ARROJA LO QUE SE RESUELVA
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

