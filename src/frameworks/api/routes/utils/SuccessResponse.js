const { SUCCESS } = require('./constants')

function SuccessResponse(res, body) {
	return res.status(SUCCESS).send(body || { message: 'Success' })
}

module.exports = { SuccessResponse }
