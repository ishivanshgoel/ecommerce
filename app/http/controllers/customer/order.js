const express = require('express')
const router = express.Router()
const Order = require('../../../models/orders')
const Claim = require('../../../models/claim')

/**list of all order of user */
router.get('/all', async (req, res, next) => {
    try {
        const userId = '111' // get from request payload
        const orders = await Order.find({ user: userId })
        res.json({
            data: orders,
            message: "success"
        })
    } catch (err) {
        next(err)
    }

})

// TODO: add a 1. middleware to check availability of products 2. middleware to compute ammount of the order 3. payment 4. check validity of the request
router.post('/place', async(req, res, next)=>{
    try{
        const userId = req.body.userId // get from request payload

        const newOrder = new Order({
            user: userId,
            products: req.body.products,
            amount: req.body.amount,
            paymentType: req.body.paymentType,
            paymentReference: req.body.paymentReference
        })

        await newOrder.save()

        res.json({
            data: newOrder._id,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})


/** post new claim */
router.post('/claim', async(req, res, next)=>{
    try{

        if(!req.body.orderId || !req.body.reason || !req.body.status) throw new Error('Parameters Missing')

        const isExisting = await Claim.find({ orderId: req.body.orderId }).exec()

        if(isExisting.length > 0) throw new Error('Claim already existing!!')

        const claim = new Claim({
            orderId: req.body.orderId,
            reason: req.body.reason,
            status: req.body.status
        })

        await claim.save()

        res.json({
            data: claim._id,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})

/**get details of existing claim */
router.get('/claim/:orderId', async(req, res, next)=>{
    try{

        if(!req.params.orderId) throw new Error('Parameter missing')

        const claim = await Claim.find({ orderId: req.params.orderId }).exec()

        res.json({
            data: claim,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})

module.exports = router