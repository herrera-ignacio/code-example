const { SuccessResponse } = require('./utils/SuccessResponse')
const { UploadRouter } = require('./upload')

function setRoutes(app) {
	app.get('/', (_, res) => SuccessResponse(res))

	app.use('/upload', UploadRouter)
}

module.exports = { setRoutes }
