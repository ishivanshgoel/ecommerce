const express = require('express')
const router = express.Router()
const Product = require('../../models/product')

// get all products
router.get('/', async (req, res, next) => {

    try {

        const products = await Product.find({ }).exec()
        res.json({
            data: products,
            message: "success"
        })

    } catch (err) {
        next(err)
    }
})

// get a particular product
router.get('/one', async (req, res, next) => {
    try {

        if (!req.query.id) throw new Error('Product id is required!!')
        let id = req.query.id
        try {

            const product = await Product.findOne({ _id: id }).exec()
            res.json({
                data: product,
                message: "success"
            })

        } catch (err) {
            next(err)
        }

    } catch (err) {
        next(err)
    }
})

module.exports = router