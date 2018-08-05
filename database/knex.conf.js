const knex = require('knex')

const database = {

  openLaser: () => knex({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'chamado',
      connectionTimeout: 600000,
      requestTimeout: 600000
    }
  })
}

module.exports = database
