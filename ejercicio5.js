/*5.- Crea una función autenticarUsuario(usuario, contraseña) que devuelva una promesa con el siguiente 
comportamiento:*/

//CREACIÓN DE FUNCIÓN CON LOS DOS PARAMETROS PARA EL USUARIO
function autenticarUsuario(usuario, contraseña) {
  //CREACIÓN DE LA PROMESA
  return new Promise((resolve, reject) => {
    //CONDICIONAL PARA REVISAR CREDENCIALES
    if (usuario === "admin" && contraseña === "1234") {
      //SI SE CUMPLRE SE ENTRAGA EL SIGUIENTE OBJETO
      const exito = {
        usuario,
        rol: "Administrador",
        mensaje: "Inicio de sesión exitoso",
      };
      resolve(exito);
    } else {
      //DE CASO CONTRARIO EL OBJETOE RROENO
      const error = {
        error: "Credenciales incorrectas",
        codigo: 401,
      };
      reject(error);
    }
  });
}

//CASO CON CRENDENCIALES CORRECTAS
autenticarUsuario("admin", "1234")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

//CASO CON CREDENCIALES INCORRECTAS
autenticarUsuario("usuario_falso", "contraseña")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
