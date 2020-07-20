const { ERROR } = require('./constants')

function ErrorResponse(res, err) {
	console.error(err.message, err)
	return res.status(ERROR).send({ error: err.message })
}

module.exports = { ErrorResponse }
