// list containing qauntity left of all the prodcuts
// update and delete any particular product

const express = require('express')
const router = express.Router()
const Product = require('../../../models/product')

/** add new product */
router.post('/', async (req, res, next) => {
    try {

        const { name, price, quantity, description, category } = req.body
        if (!name || !price || !quantity || !description || !category) {
            throw new Error('Bad Request!!')
        }

        var product = new Product({ name, price, description, category, quantity });
        product.save(function (err, data) {
            if (err) throw err;
            else{
                res.json({
                    data: data,
                    message: "success"
                })
            }
        });

    } catch (err) {
        next(err)
    }

})

router.patch('/', async (req, res, next) => {
    try {

        if(!req.body) throw new Error('Bad Request')

        let updateObject = req.body
        let id = req.body.id
        Product.updateOne({_id  : ObjectId(id)}, {$set: updateObject});
        res.json({
            message: "success"
        })
        
    } catch (err) {
        next(err)
    }
    
})

module.exports = router