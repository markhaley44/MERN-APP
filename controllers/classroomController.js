const Classroom = require('../models/Classroom')

const classroomController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
}
module.exports = classroomController