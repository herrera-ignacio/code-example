const { saveNewPost } = require('../model/repository')

/**
 * Create new Post
 * @param data 
 */
const PostCreate = async (data) => saveNewPost(data)
	
module.exports = { PostCreate }
