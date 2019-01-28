const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    childname: String,
    allergies: String,
    favoritetoy: String
})

module.exports = mongoose.model('User', User)