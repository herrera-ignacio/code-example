/**
 * Sanitize Post output
 * @param {Post} post 
 */
const dumpPost = post => ({
	title: post.title,
	body: post.body
})

/**
 * Sanitize list of Posts' outputs
 * @param {Post[]} posts 
 */
const dumpPosts = posts => posts.map(dumpPost)

module.exports = {
	dumpPost,
	dumpPosts
}
