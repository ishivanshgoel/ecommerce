// get all orders
// update a particular order

const express = require('express')
const router = express.Router()
const Order = require('../../../models/orders')

/** get all orders */
router.get('/', async(req, res, next)=>{
    try{

        let orders = await Order.find({}).exec() 

        res.json({
            data: orders,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})


/** update a particular order */
router.patch('/', async (req, res, next) => {
    try {

        if(!req.body) throw new Error('Bad Request')

        let updateObject = req.body
        let id = req.body._id
        Order.updateOne({_id  : id}, {$set: updateObject});
        res.json({
            message: "success"
        })
        
    } catch (err) {
        next(err)
    }

})

module.exports = router