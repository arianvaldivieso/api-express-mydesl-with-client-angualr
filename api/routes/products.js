const express = require('express')
const router = express.Router();

const ProductController = require('./../controllers/ProductController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for Products - Time: ', Date.now())
  next();
})


router.get('/', ProductController.index);
router.get('/:productId', ProductController.get);
router.post('/', ProductController.store);
router.put('/:productId',ProductController.update);
router.delete('/:productId',ProductController.destroy);

module.exports = router