"use strict"

/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */

const Token = require("../models/token")
const User = require("../models/user")
const passwordEncrypt = require("../helpers/passwordEncrypt")

module.exports = {

    login: async (req, res) => {

        const { username, email, password } = req.body

        if(!((username || email) && password)) {
            res.errorStatusCode = 400
            throw new Error(" Username/email and password must be entered")
        }

        const user = await User.findOne({$or: [{ username }, { email }], password: password}, )
      
        if(!user){
            res.errorStatusCode = 401
            throw new Error("Credentials are wrong, please check your username/email and password ")
        }

        if(!user.isActive ){
            re.errorStatusCode = 403
            throw new Error("Sorry you are unauthorized to log in")
        }

        let tokenData = await Token.findOne({ userId: user._id})

        if(!tokenData){
            const tokenKey = passwordEncrypt(Date.now() + user._id)
            tokenData = await Token.create({ userId: user._id, token: tokenKey})
        }

        res.status(200).send({
            error: false,
            token: tokenData.token,
            user
        })
    },

    logout: async (req, res) => {
      const token = req.headers?.authorization.split(" ")[1]

      const {deletedCount} = await Token.deleteOne({ token })
      res.status(deletedCount ? 200 : 404 ).send({
        error: !(!!deletedCount),
        message: deletedCount ? "Logged out successfully" : "Something went wrong"
      })

    },
}