// TODO: Interested user search by location

const IDX_NAME = 'user'
const IDX_TYPE = 'user'

const userModule = {
  async userIndexMapping() {
    const client = this.client()

    const idxExists = await client.indices.exists({
      index: IDX_NAME
    })

    if (!idxExists) {
      await client.indices.create({
        index: IDX_NAME
      })
    }

    return client.indices.putMapping({
      index: IDX_NAME,
      type: IDX_TYPE,
      includeTypeName: true,
      body: {
        properties: {
          firstName: {
            type: 'completion',
            analyzer: 'simple',
            search_analyzer: 'simple'
          },
          lastName: {
            type: 'completion',
            analyzer: 'simple',
            search_analyzer: 'simple'
          },
          email: {
            type: 'text'
          }
        }
      }
    })
  },

  async indexUser(user) {
    if (!user.isVerified) {
      // Do not index unverified accounts
      return
    }

    const client = this.client()

    try {
      await client.index({
        index: IDX_NAME,
        id: user._id.toString(),
        type: IDX_TYPE,
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      })
    } catch (e) {
      //eslint-disable-next-line
      console.log('INDEXING ERROR', e)
    }
  },

  async searchUsers({ query }) {
    const client = this.client()

    return client.search({
      index: IDX_NAME,
      type: IDX_TYPE,
      body: {
        query
      }
    })
  }
}

export default userModule
