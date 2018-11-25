const mongoose = require('mongoose')
const Comment = require('../models/commentModel.js')
const commentSchema = Comment.commentSchema

const postSchema = new mongoose.Schema({
    text: String,
    author: String,
    author_url: String,
    title: String,
    subtitle: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema)