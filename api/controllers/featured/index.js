import FeaturedModel from '../../models/app/featured'

const controller = {
  get: async (req, res, next) => {
    try {
      const featured = await FeaturedModel.find({})
      res.json(featured)
    } catch (e) {
      next(e)
    }
  }
}

export default controller
