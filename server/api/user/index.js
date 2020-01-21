const express = require('express')
const router = express.Router();

const ctrl = require('./user.ctrl')

router.get('/', ctrl.getList);
router.get('/:id', ctrl.getUserById)
router.delete('/:id', ctrl.deleteUser)
router.post('/', ctrl.createUser)
router.put('/:id', ctrl.updateUser)

module.exports = router;