import zxcvbn from 'zxcvbn'
export const PASSWORD_MINIMUM_SCORE = 2

const validate = password => {
  const score = zxcvbn(password)
  return score.score >= PASSWORD_MINIMUM_SCORE
}

export default validate
