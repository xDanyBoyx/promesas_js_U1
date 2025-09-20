//4.- Crea una función procesarPago(monto) que devuelva una promesa.

//CREACIÓN DE FUNCIÓN
function procesarPago(monto) {
  //CREACIÓN DE PROMESA
  return new Promise((resolve, reject) => {
    //CONDICIONAL PARA DEFINIR ENTRADA
    if (monto > 0) {
      resolve(`Pago exitoso de $${monto}`);
    } else {
      reject("Error: Monto inválido");
    }
  });
}

//CASO EXITOSO
procesarPago(100)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO FALLIDO
procesarPago(-100)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
