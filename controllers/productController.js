const router = require('express').Router();
const productModel = require('../models/products/productModel');
// const auth = require('../authentication/auth')


router.get('/', productModel.getProducts);
router.get('/:_id', productModel.getProduct);

router.post('/new', productModel.createProduct);

// router.patch('/:id', productModel.updateProduct);



module.exports = router;
