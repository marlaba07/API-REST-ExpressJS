const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

/*  Los parámetros de consulta (query parameters) son una forma de pasar información adicional
    en una URL después del signo de interrogación (?). Estos parámetros se utilizan para ajustar y
    personalizar las solicitudes que se hacen al servidor, generalmente para filtrar, ordenar o paginar resultados.
    Los parámetros de consulta son muy comunes en las aplicaciones web
    y APIs para manejar diferentes requerimientos y opciones.  */
router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('')
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
    lo asigna a la variable id, lo que hace que sea más fácil trabajar con ese valor en tu código. */
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})

module.exports = router;
