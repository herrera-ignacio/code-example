const { Post } = require('../index')

/**
 * Save new post to database
 * @param postData 
 */
const saveNewPost = async ({ title, body }) => Post.create({ title, body })

const readPosts = async () => Post.findAll()

module.exports = { saveNewPost, readPosts }
