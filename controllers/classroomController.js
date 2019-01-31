const Classroom = require('../models/Classroom')
const User = require('../models/User')

const classroomController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('classroom')
            .then((user) => {
                res.send(user.classroom)
            })
    },
    show: (req, res) => {
        var classroomId = req.params.classroomId
        Idea.findById(classroomId)
            .then((classroom) => {
                res.send(classroom)
            })
    },
}
module.exports = classroomController