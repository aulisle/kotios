import UserModel from '../models/app/user'
import { filterInactiveTokens } from '../controllers/passwordReset/services'

export const removeExpiredPasswordResetTokens = async () => {
  let page = 1
  let limit = 500

  const opts = {
    page,
    limit,
    select: '+passwordResetTokens'
  }

  while (page) {
    // Iterate through all the users
    let pagination = await UserModel.paginate({}, opts)
    page = pagination.nextPage

    let users = pagination.docs
    users.forEach(user => {
      // Remove inactive tokens and save the user
      user.passwordResetTokens = filterInactiveTokens(user)
      user.save()
    })
  }
}
