const { getPosts } = require('../controllers')

/**
 * Decorate router with List-related routes
 */
function ListRoutesDecorator({ router, SuccessResponse, ErrorResponse }) {
	router.get('/', async (req, res) => {
		try {
			const posts = await getPosts()
			return SuccessResponse(res, posts)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	})
}

module.exports = { ListRoutesDecorator }
