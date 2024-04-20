"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const brand = require("../controllers/brand")

const { isLogin, CB_AP, RB_ASPW, UB_AP, D_A  } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
.get(RB_ASPW, brand.list)
.post(CB_AP, brand.create)

router.route("/:brandId")
.get(RB_ASPW, brand.read)
.put(UB_AP, brand.update)
.patch(UB_AP, brand.update)
.delete(D_A, brand.delete)

module.exports = router