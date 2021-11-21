const router = require('express').Router()
const productC = require('../controllers/productC')
const auth = require('../middleware/auth')
const authowner = require('../middleware/authowner')


router.route('/products')
    .get(productC.getProducts)
    .post(auth, authowner,productC.createProduct)


router.route('/products/:id')
    .delete(auth, authowner, productC.deleteProduct)
    .put(auth, authowner, productC.updateProduct)



module.exports = router