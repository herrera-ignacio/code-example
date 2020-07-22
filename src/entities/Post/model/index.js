const { DataTypes, Model } = require('sequelize')
const { sequelizeClient } = require('../../../frameworks/db/drivers/sequelize/client')
const { PostEntity } = require('./entity')

class Post extends Model {}

Post.init(PostEntity(DataTypes), {
	sequelize: sequelizeClient,
	modelName: 'Post',
	timestamps: true
})

module.exports = { Post }
