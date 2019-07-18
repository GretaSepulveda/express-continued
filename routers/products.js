const express = require('express')
const router = express.Router()
const ProductsController = require('../Controllers/products')

router.get('/products', ProductsController.list)

module.exports = router