const User = require('../models/User')
const Classroom = require('../models/Classroom')
const mongoose = require('./connections')

const timmy = new User({
    childname: 'Timmy Turner',
    age: 5,
    allergies: 'peanuts',
    favoritetoy: 'Power Rangers'
})
const anthony = new User({
    childname: 'Anthony Mackey',
    age: 7,
    allergies: 'latex',
    favoritetoy: 'PJ Mask'
})
const room3B = new Classroom({
    teacherName: 'Ms. Wallace',
    specialty: 'Speech'
})
const room2A = new Classroom({
    teacherName: 'Ms. Gumbs',
    specialty: 'Reading'
})

Classroom.remove({})
    .then(() => User.remove({}))
    .then(() => User.insertMany([timmy, anthony]))
    .then(() => room3B.save())
    .then(() => room2A.save())
    .then(() => mongoose.connection.close())