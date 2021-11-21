const router = require('express').Router()
const ownerC = require('../controllers/ownerC')
const auth = require('../middleware/auth')

router.post('/register', ownerC.register)

router.post('/login', ownerC.login)

router.get('/logout', ownerC.logout)

router.get('/refresh_token', ownerC.refreshToken)

router.get('/infor', auth,  ownerC.getUser)

router.patch('/addcart', auth,ownerC .addCart)

router.get('/history', auth, ownerC.history)


module.exports = router
