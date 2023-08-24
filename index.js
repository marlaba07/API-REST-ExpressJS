const express = require('express');
const routerApi = require('./server/index')

const app = express();
const port = 3000;

app.use(express.json())    // Para que me lleve información en formato JSON cuando utilizo postman.
routerApi(app)
app.listen(port)




