"use strict"

const { mongoose: {Schema, model} } = require('../configs/dbConnection')
const { role } = require('../constraints/role&status')

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
        trim: true,
        enum: {
            message:"user enter valid role",
            values: Object.keys(role).map(key => Number(key))
        }
    }
},{
    collection:'users',
    timestamps: true
})

//? Password Encryption:
UserSchema.pre('save', function(next){
    const user = this
    if(user.isModified('password')){
        user.password = require('../helpers/encryption')(user.password)
    }
    next()
}


