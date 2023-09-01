const express = require('express');
const routerApi = require('./server/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())    // Para que me lleve información en formato JSON cuando utilizo postman.
routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port)




