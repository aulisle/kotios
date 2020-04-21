import oauthRoutes from './oauth2'
import userRoutes from './users'
import projectRoutes from './projects'
import sessionRoutes from './session'
import dreamRoutes from './dreamSession'

const init = app => {
  oauthRoutes(app)
  userRoutes(app)
  projectRoutes(app)
  sessionRoutes(app)
  dreamRoutes(app)
}

export default init
