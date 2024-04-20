"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const firm = require("../controllers/firm")

const { isLogin, D_A, CF_ASP, UF_ASP, RF_ASPW } = require("../middlewares/permissions")

router.use(isLogin)


router.route("/")
.get(RF_ASPW, firm.list)
.post(CF_ASP, firm.create)

router.route("/:firmId")
.get(RF_ASPW, firm.read)
.put(UF_ASP, firm.update)
.patch(UF_ASP, firm.update)
.delete(D_A, firm.delete)

module.exports = router