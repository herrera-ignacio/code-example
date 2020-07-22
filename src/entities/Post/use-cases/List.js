const { readPosts } = require('../model/repository')

/**
 * List available Posts
 */
const PostList = async () => readPosts()

module.exports = { PostList }
