const router = require('express').Router();
const c = require('../controllers/userController');

router.get('/', c.getUsers);
router.post('/', c.addUser);

module.exports = router;
