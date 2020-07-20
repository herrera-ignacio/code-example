const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } = process.env

const s3 = new AWS.S3({
	accessKeyId: AWS_ACCESS_KEY,
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
	region: 'us-east-1'
})

const uploadToBucket = multer({
  storage: multerS3({
    s3,
		bucket: BUCKET_NAME,
		// acl: 'authenticated-read',
		// cacheControl: 'max-age=31536000',
		// serverSideEncryption: 'AES256',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = { uploadToBucket }
