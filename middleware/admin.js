export default function({ store, error }) {
  if (!store.state.auth.user.isAdmin) {
    error({
      message: 'Ei käyttöoikeutta',
      statusCode: 403
    })
  }
}
