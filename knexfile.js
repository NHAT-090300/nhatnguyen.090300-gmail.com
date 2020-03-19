// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          post: '5432',
          user : 'root',
          password : '',
          database : 'my_db',
          charset: 'utf8'
        },
        migrations: {
          directory: __dirname + '/knex/migrations',
        },
        seeds: {
          directory: __dirname + '/knex/seeds'
        }
   }
}