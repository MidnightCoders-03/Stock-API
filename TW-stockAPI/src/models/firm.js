"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose:{ Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const passwordValidation = require("../helpers/passwordValidation")
const emailValidation = require("../helpers/emailValidation")

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        required: true,
        unique: true,
        set:(password) => passwordValidation(password) //! password validation and encrypt
        
    },

    email: {
        type: String,
        required: true,
        unique: true,
       set: (email) => emailValidation(email) //! email validation
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff: {
        type: Boolean,
        default: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
  
}, {
    collection: "users",
    timestamps: true
})

module.exports = model("User", UserSchema)

