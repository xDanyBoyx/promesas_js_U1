//3.- Crea una función verificarStock(producto, cantidad) que devuelva una promesa.

//CREACIÓN DEL OBJETO QUE CONTIENE EL INVENTARIO
let inventario = { laptop: 5, mouse: 10, teclado: 0 };

//FUNCIÓN QUE VERIFICARÁ EL STOCK DEL OBJETO
function verificarStock(producto, cantidad) {
  //CREACIÓN DE LA PROMESA
  return new Promise((resolve, reject) => {
    //CONDICIONAL PARA VERIFICAR EL STOCK
    if (
      inventario.hasOwnProperty(producto) && //CON ESTA PROPIEDAD VERIFICAMOS SI EL PRODUCTO ES VERDADERO
      inventario[producto] >= cantidad //COMPROBAMOS LA EXISTENCIA DEL PRODUCTO
    ) {
      resolve("Stock disponible, procediendo con la compra");
    } else {
      //DE NO CUMPLIRSE LA CONDICIÓN ANTERIOR ATERRIZAMOS AQUÍ
      reject("Stock insuficiente");
    }
  });
}

//CASO EXITOSO (PRODUCTO Y CANTIDAD EXISTENTE)
verificarStock("laptop", 5)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO FALIIDO (PRODUCTO EXISTENTE Y CANTIDAD FALLIDA)
verificarStock("mouse", 20)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO FALLIDO (PRODUCTO INEXISTENTE Y CANTIDAD FALLIDA)
verificarStock("PC", 10)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
