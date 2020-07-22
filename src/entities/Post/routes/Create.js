const { createPost } = require('../controllers')

/**
 * Decorate router with Create-related routes
 */
function CreateRoutesDecorator({ router, SuccessResponse, ErrorResponse }) {
	router.post('/', async (req, res) => {
		try {
			const post = await createPost(req.body)
			return SuccessResponse(res, post)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	})
}

module.exports = { CreateRoutesDecorator }
