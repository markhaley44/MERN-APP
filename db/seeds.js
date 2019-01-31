const User = require('../models/User')
const Classroom = require('../models/Classroom')
const mongoose = require('./connections')

const room3B = new Classroom({
    teacherName: 'Ms. Wallace',
    specialty: 'Speech'
})
const room2A = new Classroom({
    teacherName: 'Ms. Gumbs',
    specialty: 'Reading'
})
const timmy = new User({
    childname: 'Timmy Turner',
    age: 5,
    allergies: 'peanuts',
    favoritetoy: 'Power Rangers',
    classroom: [room2A, room3B]
})
const anthony = new User({
    childname: 'Anthony Mackey',
    age: 7,
    allergies: 'latex',
    favoritetoy: 'PJ Mask',
    classroom: [room2A, room3B]
})



Classroom.remove({})
    .then(() => User.remove({}))
    .then(() => Classroom.insertMany([room2A, room3B]))
    .then(() => timmy.save())
    .then(() => anthony.save())
    .then(() => mongoose.connection.close())