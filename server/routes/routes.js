const express = require('express')
const router = express.Router()
const userController = require('../controller/user_controller') 

router.get('/',userController.getAlluser) 
router.post('/',userController.addUser) 
router.put('/:id',userController.updateData)
router.delete('/:id',userController.deleteUser)


module.exports = router