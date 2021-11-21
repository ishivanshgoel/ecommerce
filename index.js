const express = require('express')
const app = express()
require('dotenv').config()
require('./app/config/setup')()


const auth = require('./app/http/controllers/auth')
const productAdmin = require('./app/http/controllers/admin/product')
const orderAdmin = require('./app/http/controllers/admin/order')
const customerAdmin = require('./app/http/controllers/admin/customer')
const order = require('./app/http/controllers/customer/order')

// global middlewares
app.use(express.json())

app.use('/auth', auth)
app.use('/admin/product', productAdmin)
app.use('/admin/order', orderAdmin)
app.use('/admin/customer', customerAdmin)

app.use('/user/order', order)

// error handler
app.use((err, req, res, next)=>{
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('App Started')
})
