const express = require('express')
const auth = express.Router()
const User = require('../app/models/user')

auth.post('/register',(req, res, next)=>{

    try{
        const {email, password, firstName, lastName, phoneNumber} = req.body

        if(!email || !password || !firstName || !phoneNumber){
            throw new Error('Parameters Missing')
        }

        const doExist = await User.find({ email: email, phoneNumber: phoneNumber }).exec()

        if(doExist.length > 0){
            throw new Error('Email/ Phone Number is already associated with another account')
        }

        const user = new User({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        })

        await user.save()

        res.json(user)

    } catch(err){
        next(err)
    }

})

