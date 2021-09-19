const express = require('express')
const auth = express.Router()
const User = require('../../models/user')
const { signAcessToken } = require('../../../utils/jwt')

auth.post('/register', (req, res, next) => {

    try {
        const { email, password, firstName, lastName, phoneNumber } = req.body

        if (!email || !password || !firstName || !phoneNumber) {
            throw new Error('Parameters Missing')
        }

        const doExist = await User.find({ email: email, phoneNumber: phoneNumber }).exec()

        if (doExist.length > 0) {
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

        res.json({
            email: user.email,
            accessToken: signAcessToken(user._id),
            message: 'success'
        })

    } catch (err) {
        next(err)
    }

})

auth.post('/login', (req, res, next) => {
    try {

        const { email, password, role } = req.body

        if (!email || !password) throw new Error('Email/ Password not found')

        const user = await User.findOne({ email })

        if (!user) throw new Error('User does not exist')

        if (user.password != password) throw new Error('Invalid Email/ Password')

        if(role != user.userType) throw new Error('User role does not match')

        // authenticated
        res.json({
            email: user.email,
            accessToken: signAcessToken(user._id),
            message: 'success',
            role: role
        })

    } catch (err) {
        next(err)
    }
})
