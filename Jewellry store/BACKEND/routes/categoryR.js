
const router = require('express').Router()
const categoryC = require('../controllers/categoryC')
const auth = require('../middleware/auth')
const authowner = require('../middleware/authowner')


router.route('/category')
    .get(categoryC.getCategories)
    .post(auth, authowner, categoryC.createCategory)

router.route('/category/:id')
    .delete(auth, authowner, categoryC.deleteCategory)
    .put(auth, authowner, categoryC.updateCategory)


module.exports = router