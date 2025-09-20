//2.- Crea una función verificarEdad(edad) que devuelva una promesa.

//CREAMOS LA FUNCIÓN PARA MANEJAR LA EDAD
function verificarEdad(edad) {
  //GENERAMOS LA PROMESA CON EL MANEPO DE RESOLUCIÓN Y REXCHAZO
  return new Promise((resolve, reject) => {
    //CON EL CONDICIONAL MANEJAMOS LAS DOS ENTRADAS DE LA EDAD
    if (edad <= 18) {
      resolve("Compra permitida");
    } else {
      reject("Debes ser mayor de edad para comprar este producto");
    }
  });
}

//CASO EXITOSO
verificarEdad(23)
  .then((mensaje) => {
    //SALIDA DEL MENSAJE POSITIVO
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO NEGATIVO
verificarEdad(10)
  .then((mensaje) => {
    //SALIDA DEL MENSAJE NEGATIVO
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
