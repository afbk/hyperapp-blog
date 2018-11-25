
const Comment = require('../models/commentModel.js')

//Create a comment 
async function createComment(author, text, blogId) {
    const comment = new Comment({
        author: author,
        text: text,
        blogId: blogId,
    })

    const savedComment = await comment.save()
    return savedComment
}

//Read comment
async function readComment(id) {

}

//Update comment
async function updateComment(id, text, hidden) {

}

//Hide comment
async function hideComment(id)

module.exports = {
    createComment,
    readComment,
    updateComment,
    hideComment
}