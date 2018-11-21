const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    text: String,
    author: String,
    author_url: String,
    title: String,
    subtitle: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    reported: Number
})

module.exports = mongoose.model('Post', postSchema)