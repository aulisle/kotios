import oauthRoutes from './oauth2'
import userRoutes from './users'
import projectRoutes from './projects'
import sessionRoutes from './session'
import dreamRoutes from './dreamSession'
import contactRoutes from './contact'

const init = app => {
  oauthRoutes(app)
  userRoutes(app)
  projectRoutes(app)
  sessionRoutes(app)
  dreamRoutes(app)
  contactRoutes(app)
}

export default init
