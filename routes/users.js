var express = require('express');
var router = express.Router();
const userController=require('../controllers/users.controllers')
/* GET users listing. */
router.get('/all',userController.getAll );

router.post('/create',userController.createUser);

router.post('/update/:id',userController.updateUser);

router.post('/delete/:id',userController.deleteUser);

router.post('/find/:id',userController.findUser);

module.exports = router;
