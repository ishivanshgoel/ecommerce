const express = require('express')
const router = express.Router()
const User = require('../../../models/user')

/**get user profile information */
router.get('/info', async(req, res, next)=>{
    try{

        const userId = '111' // get from request payload
        const user = await User.findOne({ _id: userId }).exec()
        res.json({
            data: user,
            message: "success"
        })

    } catch(err){
        next(err)
    }
})

/**update user profile */
router.put('/info', async(req, res, next)=>{
    try{

        const userId = '111' // get from request payload
        //TODO
        res.json({
            data: [],
            message: "success"
        })

    } catch(err){
        next(err)
    }
})
