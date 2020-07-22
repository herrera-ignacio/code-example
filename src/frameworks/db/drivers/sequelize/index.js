const { sequelizeClient } = require('./client')

const loadModel = ({ name, model, obj }) => {
	console.log(`Loading model ${name}...`)
	obj[name] = model
	return obj
}

const loadModels = (models, obj) => { 
	models.forEach((entity) => loadModel({
			name: entity.name,
			model: entity.model,
			obj
	}))
	return obj
}

const createAssociations = obj => {
	Object.keys(obj).forEach((model) => {
		if(obj[model].associate) { obj[model].associate(obj) }
	})
	return obj
}

const initDb = models => createAssociations(
	loadModels(
		models, { client: sequelizeClient }
	)
)

module.exports = { initDb }
