const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const classroomController = require('../controllers/classroomController')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/classrooms', classroomController.index)









module.exports = router
