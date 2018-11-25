const commentModel = require('../models/commentModel.js')
const Post = require('../models/postModel.js')
const postController = require('./postController.js')
require('./dbController.js')


//Create a comment and push it to blogpost as entry in array
async function createComment(postId, author, text) {
    const comment = new commentModel.Comment({
        author: author,
        text: text,
    })
    const post = await Post.findOne({ _id: postId })
        .then(x => {
            x.comments.push(comment)
            return x.save()
        }).catch(err => console.log(err.message))

    return post
}

//Read comment from a given blogpost
async function readComment(postId, commentId) {
    const readPost = await postController.readPost(postId)
    const readComment = readPost.comments.id(commentId)
    return readComment
}

//Update comment
/* async function updateComment(postId, commentId, text, hidden) {
    const readPost = await postController.readPost(postId)
    const readComment = readPost.comments.id(commentId)
    readComment.text.set(text)
    readComment.hidden.set(hidden)
    readPost.save()
    return readComment
}
updateComment('5bfad5ac1bf37512f899edf9', '5bfafd0850a9c91d32a3ec83', 'opdateret', true).then(x => confirm.log(x)) */

//Hide comment
async function hideComment(id) { }

module.exports = {
    createComment,
    readComment,
    updateComment,
    hideComment
}