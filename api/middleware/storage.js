import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import path from 'path'

const accessKeyId = process.env.AWS_ACCESS_KEY_ID || ''
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || ''
export const bucket = process.env.AWS_S3_BUCKET || ''

aws.config.update({
  accessKeyId,
  secretAccessKey
})

export var s3 = new aws.S3()

const upload = multer({
  limits: {
    fileSize: 1048576 // 1 MB
  },

  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }

    callback(null, true)
  },

  storage: multerS3({
    s3: s3,
    bucket,
    // Set public read permissions
    acl: 'public-read',
    // Auto detect contet type
    contentType: multerS3.AUTO_CONTENT_TYPE,

    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },

    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

export default {
  upload
}
