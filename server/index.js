const productRouter = require('../routes/products');
const userRouter = require('../routes/users');
const categoriesRouter = require('../routes/categories');

function routerApi(app) {
  app.use('/products', productRouter)
  app.use('/users', userRouter)
  app.use('/categories', categoriesRouter)
}

module.exports = routerApi;
