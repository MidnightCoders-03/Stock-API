"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const product = require("../controllers/product")
const {  isLogin, CP_AP, RP_ASPW, UP_AP, D_A } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(RP_ASPW, product.list)
.post(CP_AP, product.create)

router.route("/:productId")
.get(RP_ASPW, product.read)
.put(UP_AP, product.update)
.patch(UP_AP, product.update)
.delete(D_A, product.delete)

module.exports = router