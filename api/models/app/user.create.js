import UserModel from './user'

export const createLocalUser = params => {
  return new UserModel({
    ...params,
    isAdmin: false,
    isVerified: false,
    canLocalLogin: true,
    createdAt: new Date()
  })
}

export const createSocialUser = params => {
  return new UserModel({
    ...params,
    isAdmin: false,
    isVerified: true,
    canLocalLogin: false,
    passwordResetTokens: [],
    createdAt: new Date()
  })
}
