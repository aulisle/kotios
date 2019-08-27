import search from '../../search'

const controller = {
  search: async (req, res, next) => {
    try {
      const users = await search.searchUsers({ query: { match_all: {} } })
      res.json(users.hits)
    } catch (e) {
      next(e)
    }
  }
}

export default controller
