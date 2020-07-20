const express = require('express')
const { setRoutes } = require('./frameworks/api/routes')
const { logger } = require('./frameworks/api/middleware/logger')

const app = express()

//== Middleware ==//
app.use(logger)

//== Routing ==//
setRoutes(app)

module.exports = { app }
