const express = require('express')
const router = express.Router()
const Product = require('../../models/product')

// get products in a particular category
// /product?category=mensWear
router.get('/products', (req, res, next) => {

    if(!req.query.category) throw new Error('Product category required!!')
    try {

        const products = await Product.find({ category: req.query.category }).exec()
        res.json({
            data: products,
            message: "success"
        })

    } catch (err) {
        next(err)
    }
})

// get a particular product
router.get('/product', async (req, res, next) => {
    try {

        if (!req.query.id) throw new Error('Product id is required!!')
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