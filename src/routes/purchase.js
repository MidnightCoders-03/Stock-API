"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const purchase = require("../controllers/purchase")

const { isLogin, CRUD_A, C_AP, R_AP, U_AP } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(R_AP, purchase.list)
.post(C_AP, purchase.create)

router.route("/:purchaseId")
.get(R_AP, purchase.read)
.put(U_AP, purchase.update)
.patch(U_AP, purchase.update)
.delete(CRUD_A, purchase.delete)

module.exports = router