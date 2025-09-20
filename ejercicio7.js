//7.- Consulta de Clima desde un "Servicio" Instrucción:

//BASE DE DATOS LOCAL, CON CLIMA DE VARIAS CIUDADES
let baseDeDatosClima = {
  Tepic: {
    temperatura: 28,
    condicion: "Nublado con chubascos",
  },
  Guadalajara: {
    temperatura: 30,
    condicion: "Soleado con vientos",
  },
  Monterrey: {
    temperatura: 35,
    condicion: "Calor extremo",
  },
  Cancún: {
    temperatura: 32,
    condicion: "Lluvias aisladas",
  },
};

//GENERACIÓN DE FUNCIÓN
function consultarClima(ciudad) {
  return new Promise((resolve, reject) => {
    //CONDICIONAL PARA VERIFICAR SI EL PARAMETRO QUE SE ENVIA EXISTE
    if (baseDeDatosClima.hasOwnProperty(ciudad)) {
      //SI EXISTE, SE RESUELVE Y SE ARROJA SU OBJETO
      resolve({
        ciudad: ciudad,
        temperatura: baseDeDatosClima[ciudad].temperatura,
        condicion: baseDeDatosClima[ciudad].condicion,
      });
    } else {
      //DE CASO CONTRARIO SE ARROJA EL ERROR
      const error = {
        error: "Ciudad no encontrada",
        codigo: 404,
      };
      reject(error);
    }
  });
}

//CASO CON CIUDAD QUE EXISTE
consultarClima("Tepic")
  .then((datosClima) => {
    console.log(datosClima);
  })
  .catch((error) => {
    console.error(error);
  });

//CASO CON CIUDAD QUE NO SE ENCUENTRA EN LA BD
consultarClima("París")
  .then((datosClima) => {
    console.log(datosClima);
  })
  .catch((error) => {
    console.error(error);
  });
