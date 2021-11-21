const Owners = require('../models/owner')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const ownerC = {
    register: async (req, res) =>{
        try {
            const {name, email, password} = req.body;

            const owner = await Owners.findOne({email})
            if(owner) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newOwner = new Owners({
                name, email, password: passwordHash
            })

            // Save mongodb
            await newOwner.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newOwner._id})
            const refreshtoken = createRefreshToken({id: newOwner._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/owner/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;

            const owner = await Owners.findOne({email})
            if(!owner) return res.status(400).json({msg: "Owner does not exist."})

            const isMatch = await bcrypt.compare(password, owner.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: owner._id})
            const refreshtoken = createRefreshToken({id: owner._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/owner/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/owner/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, owner) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: owner.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    getUser: async (req, res) =>{
        try {
            const owner = await Owners.findById(req.owner.id).select('-password')
            if(!owner) return res.status(400).json({msg: "Owner does not exist."})

            res.json(owner)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addCart: async (req, res) =>{
        try {
            const owner = await Owners.findById(req.owner.id)
            if(!owner) return res.status(400).json({msg: "Owner does not exist."})

            await Users.findOneAndUpdate({_id: req.owner.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    history: async(req, res) =>{
        try {
            const history = await Payments.find({owner_id: req.owner.id})

            res.json(history)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
 }


const createAccessToken = (owner) =>{
    return jwt.sign(owner, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (owner) =>{
    return jwt.sign(owner, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = ownerC