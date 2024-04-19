"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const { mongoose:{ Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const passwordValidation = require("../helpers/passwordValidation")
const emailValidation = require("../helpers/emailValidation")
const { userRoles } = require('../constraints/role&status')




const { set } = require('mongoose')
const { mongoose: {Schema, model} } = require('../configs/dbConnection')
const { role } = require('../constraints/role&status')
const {passwordValidation, emailValidation} = require('../helpers/userValidation')
const { type } = require('os')

//? User Model:
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        set: password => passwordValidation(password)
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        set: email => emailValidation(email)
    },
    role:{
        type: Number,
        required: true,
        trim: true,
        enum: {
            message:"user enter valid role",
            values: Object.keys(role).map(key => Number(key))
        }
    },

    // isStaff: {
    //     type: Boolean,
    //     default: true
    // },

    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },  //! role&status'te roleler belirlendiği için yoruma aldık

    role:{
        type: String,
        trim: true,
        required: true,
        enum: {
            values: Object.keys(userRoles),
            message:"Please enter a valid role"
        }

    }
  
}, {
    collection: "users",

    timestamps: true
})

module.exports = model('User', UserSchema)




