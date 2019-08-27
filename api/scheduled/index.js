import cron from 'node-cron'
import { removeExpiredPasswordResetTokens } from './passwordReset'
import { removeUnusedImages } from './images'

const createJobs = () => {
  cron.schedule('0 3 * * *', removeExpiredPasswordResetTokens)
  cron.schedule('30 3 * * *', removeUnusedImages)
}

export default createJobs
