const { initDb } = require('./drivers/sequelize')
const { Post } = require('../../entities/Post/model')

const models = [
	{ name: 'Post', model: Post }
]

const db = initDb(models)

module.exports = { db }
