const express = require("express");
const { createOrder, processPayment } = require("./paymentController");
const router = express.Router()

router.get("/create-order", createOrder);
router.post("/payment", processPayment)

module.exports = router;