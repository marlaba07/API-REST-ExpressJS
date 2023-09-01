# HTTP response status codes:

- Rangos.
  100 a 199 Informational responses [Los más conocidos: 100]
  200 a 299 Successful responses [200 (Todo OK), 201 (Creación exitosa)]
  300 a 399 Redirection messages []
  400 a 499 Client error responses [404 Not Found]
  500 a 599 Server error responses []

# Los Middleware...

Permiten uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida.
Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente,
el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

# Ejemplo

_Aparecen como tercer parametro en nuestros callback's dónde utilizamos response y request_
$INICIO CÓDIGO.
function(req, res, next){
  if(something){
    res.send('end')
  } else {
    next();
  }
}
$FIN CÓDIGO.

_Hay de tipo error también, donde tenemos que tener 4 parametros_
$INICIO CÓDIGO
function(error, req, res, next){
  if(error){
    res.status(500).json({error})
  } else {
    next();
  }
}
$FIN CÓDIGO

_Sus casos de uso son los siguientes_
a- Funcionan como pipes, es decir, para conectarse unos con otros.
b- Validación de datos.
c- Capturar errores.
d- Validar permisos.
e- Controlar accesos.

_Lista de Midlewares más populares en Express_

- CORS: Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación.
  http://expressjs.com/en/resources/middleware/cors.html

- MORGAN: Un logger de solicitudes HTTP para Node.js.
  http://expressjs.com/en/resources/middleware/morgan.html

- HELMET: Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar!
  https://github.com/helmetjs/helmet

- EXPRESS DEBUG: Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.
  https://github.com/devoidfury/express-debug

- EXPRESS SLASH: Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas.
  https://github.com/ericf/express-slash

- PASSPORT: Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones.
  https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html

_Recomendaciones para producción_

- Cors
- HTTPS
- PROCESOS DE BUILD
- REMOVER LOGS
- SEGURIDAD (HELMET)
- TESTING
