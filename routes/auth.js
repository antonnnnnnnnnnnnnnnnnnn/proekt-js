//регистрация

const express = require('express')
const controllers = require('../controllers/auth.js')
const router = express.Router()

//localhost:3000/api/auth.login

router.get ('/login', controllers.login)
router.get('/register', controllers.register)
module.exports = router