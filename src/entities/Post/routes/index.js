const express = require('express')
const { SuccessResponse } = require('../../../frameworks/api/routes/utils/SuccessResponse')
const { ErrorResponse } = require('../../../frameworks/api/routes/utils/ErrorResponse')
const { CreateRoutesDecorator } = require('./Create')
const { ListRoutesDecorator } = require('./List')

const router = express.Router()

//== Decorate with routes ==//
CreateRoutesDecorator({ router, SuccessResponse, ErrorResponse })
ListRoutesDecorator({ router, SuccessResponse, ErrorResponse })

module.exports = { PostRouter: router }
