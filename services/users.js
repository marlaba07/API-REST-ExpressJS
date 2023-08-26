const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        gender: faker.person.gender()
      })
    }
  }

  create(data) {
    const newUsers = {
      id: faker.datatype.uuid,
      ...data
    }
    this.users.push(newUsers);
    return newUsers
  }

  find() {
    return this.users
  }

  findeOne(id) {
    return this.users.find(item => item.id === id)
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id)
    if (index == -1) {
      throw new Error('No se encontró ese index');
    }

    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }

    return this.users[index]
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === id)
    if (index == -1) {
      throw new Error('No se encontró ese index');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService
