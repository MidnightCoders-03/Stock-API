"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const sale = require("../controllers/sale")
const { isAdmin, isSaler, isLogin, R_AS } = require('../middlewares/permissions')

router.use(isLogin)

router.route("/")
.get( R_AS,sale.list)
.post(sale.create)

router.route("/:saleId")
.get( R_AS,sale.read)
.put(sale.update)
.patch(sale.update)
.delete(sale.delete)

module.exports = router