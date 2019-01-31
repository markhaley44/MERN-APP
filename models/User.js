const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    childname: String,
    age: Number,
    allergies: String,
    favoritetoy: String,
    classroom: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Classroom'
        }]
})

module.exports = mongoose.model('User', User)