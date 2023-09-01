const boom = require('@hapi/boom');

/* Los middlewares en Node.js son como capas intermedias que procesan y gestionan las solicitudes HTTP antes de llegar a las rutas de tu aplicación.
Ayudan en tareas como la autenticación, validación de datos y manejo de errores, mejorando la organización y funcionalidad de tu aplicación web.
En resumen, los middlewares son como filtros que hacen que tu aplicación funcione suavemente. */
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const error = schema.validate(data)
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHandler;
