import elasticsearch from 'elasticsearch'

import users from './users'
import projects from './projects'
import { populate } from '../data/projects'

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
        return populate(this)
      })
  },

  client() {
    return $client
  },

  ...users,
  ...projects
}

export default search
