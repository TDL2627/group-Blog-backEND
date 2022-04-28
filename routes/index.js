const express = require('express')
const UserController = require('../controllers/user')

const router = express.Router()

router.post('/user', UserController.createUser)

module.exports = router