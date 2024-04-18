"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const brand = require("../controllers/brand")

const { isLogin } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(brand.list)
.post(brand.create)

router.route("/:brandId")
.get(brand.read)
.put(brand.update)
.patch(brand.update)
.delete(brand.delete)

module.exports = router