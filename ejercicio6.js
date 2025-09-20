/*6. Crea una función verificarSaldo(cuenta, monto) que devuelva una promesa con el siguiente 
comportamiento:*/

//GENERAMOS LA FUNCIÓN CON LOS DOS PARAMETROS
function verificarSaldo(cuenta, monto) {
  //GENERAMOS LA PROMESA
  return new Promise((resolve, reject) => {
    //CON LA CONDICIÓN DEFINIMOS EL CAMINO
    if (cuenta < monto) {
      //DE IGUAL MANERA QUE EN EJEMPLOS ANTERIRORES GENERAMOS EL OBJETO A SALIR
      saldoDisponible = cuenta;
      const noSaldo = {
        error: "Fondos insuficientes",
        saldoDisponible,
        codigo: 402,
      };
      reject(noSaldo);
      //OBJETO DE FALLO
    } else {
      saldoRestante = cuenta - monto;
      const siSaldo = {
        cuenta,
        saldoRestante,
        mensaje: "Transacción aprobada",
      };
      resolve(siSaldo);
    }
  });
}

//CASO EN QUE EL LA CUENTA PUEDE CUBRIR EL MONTO
verificarSaldo(1000, 500)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO EN QUE LA CUENTA NO PUEDE CUBRIR EL MONTO
verificarSaldo(1000, 2500)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
