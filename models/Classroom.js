const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Classroom = new Schema({
    teacherName: String,
    specialty: String,
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
})

module.exports = mongoose.model('Classroom', Classroom)