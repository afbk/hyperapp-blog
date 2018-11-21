
const mongoose = require('mongoose')
const Post = require('./models/postModel.js')
const Comment = require('./models/commentModel.js')

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

//Create a blog-post
function createPost(author, author_url, title, subtitle, text, ) {
    const post = new Post({
        author: author,
        author_url: author_url,
        title: title,
        subtitle: subtitle,
        text: text
    })

    return post
    //const savedPost = await post.save()
    //return savedPost
}

console.log(createPost('Lars', 'http://lars.lars', 'Titel', 'undertitel', 'tekst'))

//export { createComment, createPost }