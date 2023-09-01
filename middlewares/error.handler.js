/* Middleware para HttpErrors*/

// Función para logear errores.
function logErrors(err, req, res, next) {
  console.error(err)
  next(err)
  /* En el contexto de los middlewares en Node.js (especialmente en frameworks como Express.js),
  next es una función que se llama para pasar el control al siguiente middleware en la cadena de middleware.
  Sirve para indicar que el middleware actual ha completado su trabajo y que la ejecución debe continuar
  con el siguiente middleware o ruta en la cola.

  Cuando utilizamos nexty enviamos el 'error' como parametro decimos que estamos usando un middleware de tipo error.
  Si lo usamos sin nada como parametro es un middleware normal. */
}

// Funcion para crear un formato cada vez que tenemos un error en nuestra apliacación.
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
