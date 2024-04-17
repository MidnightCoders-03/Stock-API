"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const product = require("../controllers/product")
const {  isLogin, isAdmin, isPurchaser } = require("../middlewares/permissions")

router.use(isLogin, isAdmin, isPurchaser)
router.route("/")
.get(product.list)
.post(product.create)

router.route("/:productId")
.get(isAdmin,product.read)
.put(product.update)
.patch(product.update)
.delete( product.delete)

module.exports = router