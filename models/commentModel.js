const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: false },
    reported: { type: Number, default: 0 }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Comment,
    commentSchema
}