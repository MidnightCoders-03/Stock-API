"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const SaleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    brandId: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },

    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    quantity: {
        type: Number,
        default: 0
    },

    price: {
        type: Number,
        required: true
    },

    priceTotal: {
        type: Number,
        default:function() {return this.price * this.quantity}, 
        transform: function() { return this.price * this.quantity } //! to update the total price
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    collection: "sales",
    timestamps: true
})

module.exports = model("Sale", SaleSchema)