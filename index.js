const express = require('express');
const routerApi = require('./server/index')

const app = express();
const port = 3000;

routerApi(app)
app.listen(port)




