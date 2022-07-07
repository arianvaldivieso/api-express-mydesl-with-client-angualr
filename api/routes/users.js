const express = require('express')
const router = express.Router();

const UserController = require('./../controllers/UserController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for Users - Time: ', Date.now())
  next();
})


router.get('/', UserController.index);
router.get('/:userId',UserController.get);
router.post('/login', UserController.login);

module.exports = router