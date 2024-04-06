"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose: { Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const CategorySchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        index: true
    }
}, {
    collection:"categories",
    timestamps: true
})

module.exports = model("Category", CategorySchema)