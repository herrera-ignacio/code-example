const { SuccessResponse } = require('./utils/SuccessResponse')
const { UploadRouter } = require('./upload')
const { PostRouter } = require('../../../entities/Post/routes')

function setRoutes(app) {
	app.get('/', (_, res) => SuccessResponse(res))

	app.use('/upload', UploadRouter)
	
	app.use('/posts', PostRouter)
}

module.exports = { setRoutes }
