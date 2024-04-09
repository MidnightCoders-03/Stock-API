"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const BrandSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        index: true,
        set:(name) => name.toUpperCase()
    },

    image: String

}, {
    collection: "brands",
    timestamps: true
})

module.exports = model("Brand", BrandSchema)