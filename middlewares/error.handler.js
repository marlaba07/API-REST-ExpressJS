/* Middleware para HttpErrors*/

// Función para logear errores.
function logErrors(err, req, res, next) {
  // console.log('logErrors')
  console.error(err)
  next(err)
  /* Cuando utilizamos next
  y enviamos el 'error' como parametro decimos que estamos usando un middleware de tipo error.
  Si lo usamos sin nada como parametro es un middleware normal. */
}

// Funcion para crear un formato cada vez que tenemos un error en nuestra apliacación.
function errorHandler(err, req, res, next) {
  // console.log('errorHandler')
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
