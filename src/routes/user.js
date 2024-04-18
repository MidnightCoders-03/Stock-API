"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const user = require("../controllers/user")
const { isLogin } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(user.list)
.post(user.create)

router.route("/:userId")
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.delete)

module.exports = router