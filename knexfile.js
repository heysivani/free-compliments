// Update with your config settings.

module.exports = {
  client: 'postgres',
  connection: {
    host : '127.0.0.1',
    user : '',
    database : 'bbapi'
  },

  development: {
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : '',
      database : 'bbapi'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bbapi',
      user:     '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'bbapi',
      user:     '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
