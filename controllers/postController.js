const Post = require('../models/postModel.js')
require('./dbController.js')
const mongoose = require('mongoose')

//Create a blog-post
async function createPost(author, author_url, title, subtitle, text, ) {
    const post = new Post({
        author: author,
        author_url: author_url,
        title: title,
        subtitle: subtitle,
        text: text,
        hidden: false
    })

    const savedPost = await post.save()
    return savedPost
}

// Read post
async function readPost(id) {
    const read = await Post.findOne({ _id: id }).catch(err => console.error(err.message))
    return read
}

// Update post
async function updatePost(id, text, title, subtitle, hidden) {
    const updatePost = await Post.findOneAndUpdate({ _id: id },
        {
            text,
            title,
            subtitle,
            hidden
        })
    return updatePost
}


// Hide Post
async function hidePost(id) {
    const hidePost = await Post.findOneAndUpdate({ _id: id },
        {
            hidden: true
        })
    return hidePost
}

module.exports = {
    createPost,
    readPost,
    updatePost,
    hidePost
}