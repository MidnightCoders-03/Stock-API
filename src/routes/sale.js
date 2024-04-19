"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const sale = require("../controllers/sale")
const { isLogin, R_AS, CRUD_A, C_AS, U_AS } = require('../middlewares/permissions')

router.use(isLogin)

router.route("/")
.get( R_AS,sale.list)
.post(C_AS, sale.create)

router.route("/:saleId")
.get( R_AS,sale.read)
.put(U_AS, sale.update)
.patch(U_AS, sale.update)
.delete(CRUD_A, sale.delete)

module.exports = router