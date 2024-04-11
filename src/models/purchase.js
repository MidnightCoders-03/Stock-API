"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const PurchaseSchema = new Schema({

    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    firmId:{
        type: Schema.Types.ObjectId,
        ref: "Firm",
        required: true
    },

    brandId:{
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },

    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    quantity: {
        type: Number,
        default: 1,
    },

    price: {
        type: Number,
        required: true
    },

    priceTotal: {
       type: Number,
       set: function() { return this.quantity * this.price},
       transform: function() { return this.quantity * this.price }
    }

}, {
    collection: "purchases",
    timestamps: true
})

module.exports = model("Purchase", PurchaseSchema)