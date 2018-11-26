const express = require('express')
const app = express()
const Post = require('../controllers/postController')
const Comment = require('../controllers/commentController')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))