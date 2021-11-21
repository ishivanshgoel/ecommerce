const mongoose = require('mongoose')
const status = require('../../utils/orderStatus')

const Order = new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    products: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: status.placed
    },
    paymentType: {
        type: String,
        required: true
    },
    paymentReference: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', Order)