const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Nuevo endpoint')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    },
  ])
})

/*  En Express.js, cuando definimos una ruta con una parte variable,
    como /:id, podemos capturar el valor de esa parte variable en la URL.
    req.params es como una caja que contiene todos esos valores capturados.
    Por ejemplo, si tienes la ruta /users/:id, y alguien accede a /users/123,
    req.params contendrá { id: '123' }.

    const { id } = req.params:
    Aquí estás utilizando una técnica de JavaScript llamada "destructuring" (desestructuración).
    Supongamos que en req.params tienes { id: '456' }.
    Al hacer const { id } = req.params, estás tomando el valor '456' y lo asignas a la variable id.
    Ahora puedes usar simplemente id en lugar de req.params.id para acceder al valor capturado en la URL.
    En resumen, const { id } = req.params está tomando el valor de id capturado de la URL y
    lo asigna a la variable id, lo que hace que sea más fácil trabajar con ese valor en tu código.
*/

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId,
  })
})

app.listen(port, () => {
  console.log('Mi port' + port)
})
