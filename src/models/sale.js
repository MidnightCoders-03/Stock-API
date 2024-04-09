"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
const saleQuantityCalculation = require('../helpers/saleQuantityCalculation')
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
        default: 1
    }
}, {
    collection: "sales",
    timestamps: true
})

module.exports = model("Sale", SaleSchema)