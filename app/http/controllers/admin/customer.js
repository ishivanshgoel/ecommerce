// get list of all customers
// update information of all customers

const express = require('express')
const router = express.Router()
const User = require('../../../models/user')

/** get all orders */
router.get('/', async(req, res, next)=>{
    try{

        let users = await User.find({}).exec()

        res.json({
            data: users,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})

/** update a particular user  */
router.patch('/', async (req, res, next) => {
    try {

        if(!req.body) throw new Error('Bad Request')

        let updateObject = req.body
        let id = req.body.id
        User.updateOne({_id  : ObjectId(id)}, {$set: updateObject});
        res.json({
            message: "success"
        })
        
    } catch (err) {
        next(err)
    }

})

module.exports = router