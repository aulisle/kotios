const paginate = async (req, model, params = {}) => {
  let page = req.query.page || 1
  let limit = req.query.limit || 20

  if (limit > 100) {
    limit = 100
  }

  const opts = {
    page,
    limit
  }

  const res = await model.paginate(params, opts)
  return res
}

export default paginate
