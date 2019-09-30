import elasticsearch from 'elasticsearch'

import users from './users'
import projects from './projects'

let $client = null

const search = {
  init(host) {
    $client = new elasticsearch.Client({
      host
    })

    return this.userIndexMapping()
      .then(() => {
        return this.projectIndexMapping()
      })
      .then(() => {
        return this.populateProjects()
      })
  },

  client() {
    return $client
  },

  ...users,
  ...projects
}

export default search
