"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const product = require("../controllers/product")
const {  isLogin, CRUD_A, R_ASPW } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(R_ASPW, product.list)
.post(CRUD_A, product.create)

router.route("/:productId")
.get(R_ASPW, product.read)
.put(CRUD_A, product.update)
.patch(CRUD_A, product.update)
.delete(CRUD_A, product.delete)

module.exports = router