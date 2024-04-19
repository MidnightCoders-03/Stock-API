"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const category = require("../controllers/category")

const { isLogin, R_ASPW, CRUD_A } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(R_ASPW, category.list)
.post(CRUD_A, category.create)

router.route("/:categoryId")
.get(R_ASPW, category.read)
.put(CRUD_A, category.update)
.patch(CRUD_A, category.update)
.delete(CRUD_A, category.delete)

module.exports = router