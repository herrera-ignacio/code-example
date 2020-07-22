const Sequelize = require('sequelize')

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const sequelizeClient = new Sequelize(
	DB_NAME,
	DB_USER,
	DB_PASSWORD,
	{
		host: DB_HOST,
		port: DB_PORT,
		dialect: 'postgres'
	}
)

module.exports = { sequelizeClient }
