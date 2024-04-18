"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const category = require("../controllers/category")

const { isLogin } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(category.list)
.post(category.create)

router.route("/:categoryId")
.get(category.read)
.put(category.update)
.patch(category.update)
.delete(category.delete)

module.exports = router