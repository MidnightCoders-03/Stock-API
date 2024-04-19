"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const brand = require("../controllers/brand")

const { isLogin, C_ASP, CRUD_A, R_ASPW } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(R_ASPW, brand.list)
.post(CRUD_A, brand.create)

router.route("/:brandId")
.get(R_ASPW, brand.read)
.put(CRUD_A, brand.update)
.patch(CRUD_A, brand.update)
.delete(CRUD_A, brand.delete)

module.exports = router

