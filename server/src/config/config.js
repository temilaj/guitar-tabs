require('dotenv').config();

module.exports = {
  port: process.env.PORT || 4200,
  db: {
    database: process.env.DATABASE_NAME || 'GuitarTabs',
    user: process.env.DATABASE_USER || 'guitartabs',
    password: process.env.DATABASE_PASS || 'guitartabs',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './guitartabs.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET,
  },
}