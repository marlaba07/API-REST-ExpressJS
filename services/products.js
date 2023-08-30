const { faker } = require('@faker-js/faker');

/* En Node.js, el término "services" generalmente se refiere a módulos,
  funciones o clases que encapsulan la lógica de negocios o la funcionalidad específica de una aplicación.
  Estos servicios se utilizan para dividir el código en unidades más pequeñas y manejables,
  lo que facilita la organización, reutilización y mantenimiento del código.

  Los servicios en Node.js pueden desempeñar diversas funciones, como interactuar con bases de datos,
  conectarse a APIs externas, procesar datos, implementar lógica empresarial compleja, autenticación y autorización.
  Al dividir la aplicación en servicios, se puede lograr una arquitectura más modular y escalable,
  lo que facilita la expansión y la mejora continua del software.

  En resumen, los servicios en Node.js son componentes modulares que encapsulan funcionalidades
  específicas de la aplicación, mejorando la organización y el mantenimiento del código.*/

/* Los servicios suelen ser, en su mayoria, asincronos.
Node tiene una gran habilidad para correr las cosas de forma asíncrona
y porque normalmente normalmente para obtener los datos, los vamos a obtener
de fuentes externas (librerias, API, mongoDB, postgre, etc).

Para hacerlo de manera asincronica usamos el async y al await. (Repasar promesas).
Siempre que tenemos async tenemos que utilizar inevitablemente await. */

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);   // En vez de un push puedo llamar a una base de datos.  await bd.add(newProduct) -> { nombre: pedro}
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

/* También en vez de utilizar una clase y exportar
 la clase entera, como otra opción (quizás mas simple),
 es posible crear funciones simples una por una y exportarlas
 directamente para utilizarlas

 Por ejemplo: module.exports = {create, find, update etc etc} */

module.exports = ProductsService

// Manipulación de array's [ver despues curso de Nicolas Molina]
