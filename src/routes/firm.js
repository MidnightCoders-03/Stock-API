"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const firm = require("../controllers/firm")

const { isLogin } = require("../middlewares/permissions")

router.use(isLogin)


router.route("/")
.get(firm.list)
.post(firm.create)

router.route("/:firmId")
.get(firm.read)
.put(firm.update)
.patch(firm.update)
.delete(firm.delete)

module.exports = router