const express = require('express')
const { SuccessResponse } = require('./utils/SuccessResponse')
const { uploadToBucket } = require('../../aws/s3-upload')

const router = express.Router()

router.post('/',
	uploadToBucket.single('uploaded_file'),
	(req, res) => SuccessResponse(res, { url: req.file.location })
)

module.exports = { UploadRouter: router }
