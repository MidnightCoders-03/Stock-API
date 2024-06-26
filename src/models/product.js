"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const ProductSchema = new Schema({

    categoryId:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    brandId:{
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },

    name: {
        type: String,
        trim: true,
        required: true
    },

    quantity: {
        type: Number,
        default: 0,
    }

}, {
    collection: "products",
    timestamps: true
})

module.exports = model("Product", ProductSchema)