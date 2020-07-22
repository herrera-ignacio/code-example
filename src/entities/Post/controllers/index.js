const { PostCreate } = require('../use-cases/Create')
const { PostList } = require('../use-cases/List')
const { dumpPost, dumpPosts } = require('./dump')

/**
 * Entrypoint for Post actions
 */
const PostController = {
	getPosts: async () => dumpPosts(await PostList()),
	createPost: async data => dumpPost(await PostCreate(data))
}

module.exports = PostController
