const Post = require('../models/postModel.js')

//Create a blog-post
function createPost(author, author_url, title, subtitle, text, ) {
    const post = new Post({
        author: author,
        author_url: author_url,
        title: title,
        subtitle: subtitle,
        text: text
    })

    const savedPost = await post.save()
    return savedPost
}


// Read post
async function readPost(id) {

}
// Update post
async function updatePost(id, text, title, subtitle, hidden) {

}

// Hide Post
async function hidePost(id)

module.exports = {
    createPost,
    readPost,
    updatePost,
    hidePost
}