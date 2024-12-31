const express = require("express")
const router = express.Router()

const initWebRouter = (app) => {
    return app.use("/v1/api",router)
}
