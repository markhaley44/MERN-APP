const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Classroom = new Schema({
    teacherName: String,
    specialty: String
})

module.exports = mongoose.model('Classroom', Classroom)