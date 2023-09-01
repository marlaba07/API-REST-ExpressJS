const express = require('express');
const cors = require('cors');
const routerApi = require('./server/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())    // Para que me lleve información en formato JSON cuando utilizo postman.

const whitelist = ['http://localhost:3000']  // Dominios que puedan utilizar mi API
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Mi server en Express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port)




