const commentModel = require('../models/commentModel.js')
const Post = require('../models/postModel.js')
const postController = require('./postController.js')
require('./dbController.js')


//Create a comment and push it to blogpost as entry in array
async function createComment(postId, author, text) {
    //Creates new comment object
    const comment = new commentModel.Comment({
        author: author,
        text: text,
    })
    //Finds parent and pushes comment to the comments array in parent
    const post = await Post.findOne({ _id: postId })
        .then(x => {
            x.comments.push(comment)
            return x.save()
        }).catch(err => console.log(err.message))

    return post
}

//Read comment from a given, parent blogpost
async function readComment(postId, commentId) {
    const readPost = await postController.readPost(postId)
    const readComment = readPost.comments.id(commentId)
    return readComment
}

//Update comment
async function updateComment(postId, commentId, text, hidden) {
    //Gets parent post and subdocument belonging to commentId
    const readPost = await postController.readPost(postId)
    const readComment = readPost.comments.id(commentId)
    //Sets the new states
    readComment.set({ hidden: hidden, text: text })
    //Saves the parent document with subdocument
    readPost.save()
    return readPost
}

//TODO: Hide comment WORKAROUND: Use updateComment to hide.
async function hideComment(id) { }

module.exports = {
    createComment,
    readComment,
    updateComment,
    hideComment
}