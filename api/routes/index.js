import oauthRoutes from './oauth2'
import userRoutes from './users'
import passwordResetRoutes from './passwordReset'
import searchRoutes from './search'
import featuredRoutes from './featured'
import projectRoutes from './projects'

const init = app => {
  oauthRoutes(app)
  userRoutes(app)
  passwordResetRoutes(app)
  searchRoutes(app)
  featuredRoutes(app)
  projectRoutes(app)
}

export default init
