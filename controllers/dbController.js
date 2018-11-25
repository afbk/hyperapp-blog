require('dotenv').config()
const mongoose = require('mongoose')

const options = { useNewUrlParser: true }

const db = mongoose.connect(process.env.DB_HOST, options, (err) => {
    err ? console.error(err) : console.log('connected')
})

module.exports = {
    db
}