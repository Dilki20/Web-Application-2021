const Owners = require('../models/owner')

const authowner = async (req, res, next) =>{
    try {
        // Get owner information by id
        const owner = await Owners.findOne({
            _id: req.owner.id
        })
        if(owner.role === 0)
            return res.status(400).json({msg: "Admin resources access denied"})

        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authowner