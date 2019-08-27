import { s3, bucket } from '../middleware/storage'
import UserModel from '../models/app/user'

import Logger from '../../plugins/logger'

export const removeUnusedImages = async () => {
  const params = {
    Bucket: bucket
  }
  let dataTruncated = true

  // Iterate all objects in the bucket
  while (dataTruncated) {
    const data = await s3.listObjects(params).promise()
    dataTruncated = data.IsTruncated
    params.Marker = data.NextMarker

    const images = data.Contents

    images.forEach(async content => {
      // Check if each image has a user
      const hasUser = await UserModel.findOne({ picKey: content.Key })

      if (hasUser == null) {
        // If no user is using the logo, delete it
        s3.deleteObject({
          Bucket: bucket,
          Key: content.Key
        })
          .promise()
          .then(() => {
            Logger.info(`Deleted unused image ${content.Key}`)
          })
          .catch(e => {
            Logger.error(`CANNOT DELETE IMAGE ${e}`)
          })
      }
    })
  }
}
