/* Middleware para HttpErrors*/

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

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

/* La librería "Boom" en Node.js ayuda a manejar y enviar errores de manera ordenada en aplicaciones web.
Facilita la creación de mensajes de error con información detallada para comunicar problemas de manera más clara a los usuarios o desarrolladores que usan la aplicación.
En resumen, Boom simplifica la gestión de errores en Node.js.*/
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
