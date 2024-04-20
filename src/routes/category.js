"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const category = require("../controllers/category")

const { isLogin, D_A, CC_A, RC_ASPW, UC_A } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(RC_ASPW, category.list)
.post(CC_A, category.create)

router.route("/:categoryId")
.get(RC_ASPW, category.read)
.put(UC_A, category.update)
.patch(UC_A, category.update)
.delete(D_A, category.delete)

module.exports = router