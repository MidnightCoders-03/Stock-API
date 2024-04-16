"use strict"

const { mongoose: {Schema, model} } = require('../configs/dbConnection')

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
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    role:{
        type: Number,
        required: true,
        trim: true
    }
},{
    collection:'users',
    timestamps: true
})


