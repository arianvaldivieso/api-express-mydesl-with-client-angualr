const express = require('express')
const router = express.Router();

const myLogger = require('./../middlewares/authMiddleware.js');

const OrderController = require('./../controllers/OrderController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for Orders - Time: ', Date.now())
  next();
})

router.use(myLogger);

router.get('/', OrderController.index);
router.get('/:orderId',OrderController.get);
router.get('/:orderId/getProducts',OrderController.getProducts);
router.post('/', OrderController.store);
router.put('/:orderId',OrderController.update);
router.delete('/:orderId',OrderController.destroy);

module.exports = router