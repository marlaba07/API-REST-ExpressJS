const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product')

const service = new ProductsService();

/*  Los parámetros de consulta (query parameters) son una forma de pasar información adicional
    en una URL después del signo de interrogación (?). Estos parámetros se utilizan para ajustar y
    personalizar las solicitudes que se hacen al servidor, generalmente para filtrar, ordenar o paginar resultados.
    Los parámetros de consulta son muy comunes en las aplicaciones web
    y APIs para manejar diferentes requerimientos y opciones.  */
router.get('/', async (req, res) => {
  const products = await service.find()
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
router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

/* En el método POST, req.body es una propiedad en Express.js
y otros frameworks web que contiene los datos enviados en el cuerpo de una solicitud HTTP.
En particular, se utiliza para acceder a los datos enviados en un formulario HTML o
en una solicitud JSON en el cuerpo de la solicitud POST.

Cuando se envía una solicitud POST desde un formulario HTML o una aplicación cliente,
los datos que el usuario ingresa (como texto, números, selecciones, etc.)
se incluyen en el cuerpo de la solicitud.
El servidor puede utilizar req.body para acceder y procesar estos datos.

Por ejemplo:

app.post('/submit', (req, res) => {
  const inputData = req.body;   // Datos enviados en el cuerpo de la solicitud
                                // Puedes procesar los datos y responder en consecuencia
});  */
router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
})

// Puedo utilizar patch o put, son similares.
router.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
  const { id } = req.params
  const body = req.body
  try {
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.delete(id);
  res.json(rta)
})

module.exports = router;

