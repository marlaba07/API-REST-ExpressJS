const express = require('express');

const productRouter = require('../routes/products');
const userRouter = require('../routes/users');
const categoriesRouter = require('../routes/categories');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router);

  router.use('/products', productRouter)
  router.use('/users', userRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerApi;
