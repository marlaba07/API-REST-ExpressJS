const Joi = require('joi');

/* En términos sencillos, Joi te ayuda a asegurarte de que los datos que recibes sean correctos y cumplan con las expectativas de tu aplicación.
Por ejemplo, puedes usar Joi para verificar que un correo electrónico tenga un formato válido o que un número esté dentro de un rango específico.
Esto ayuda a prevenir errores y mejorar la seguridad de tu aplicación al validar los datos antes de procesarlos. */

const id = Joi.string().uuid();
const name = Joi.string().alphanumeric().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
