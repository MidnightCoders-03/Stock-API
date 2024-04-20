"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const sale = require("../controllers/sale")
const { isLogin, CS_AS, RS_AS, D_A, US_AS } = require('../middlewares/permissions')

router.use(isLogin)

router.route("/")
.get( RS_AS,sale.list)
.post(CS_AS, sale.create)

router.route("/:saleId")
.get( RS_AS,sale.read)
.put(US_AS, sale.update)
.patch(US_AS, sale.update)
.delete(D_A, sale.delete)

module.exports = router