import elasticsearch from 'elasticsearch'

import users from './users'

let $client = null

const search = {
  init(host) {
    $client = new elasticsearch.Client({
      host
    })

    return Promise.all([this.userIndexMapping()])
  },

  client() {
    return $client
  },

  ...users
}

export default search
