const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config()

const paymentRoute = require("./paymentRoute");

app.use(express.json());
app.use(cors())

app.use("/api", paymentRoute);

app.listen(8000, () => {
    console.log(`Server is up and running at 5000`)
})