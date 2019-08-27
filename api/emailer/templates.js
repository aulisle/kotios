import Renderer from 'email-templates'
import previewEmail from 'preview-email'
import Logger from '../../plugins/logger'

const invite = require.resolve('./invite.pug')
const reset = require.resolve('./reset.pug')

const renderer = new Renderer()

export const renderInvitation = ({
  title,
  tokenUrl,
  tokenExpires,
  publicUrl
}) => {
  const css = `${publicUrl}email.css`
  return renderer
    .render(invite, { title, tokenUrl, tokenExpires, publicUrl, css })
    .then(result => {
      if (process.env.NODE_ENV === 'development') {
        previewEmail({ to: '', from: '', subject: 'subject', html: result })
      }

      return result
    })
    .catch(err => {
      Logger.error(err)
    })
}

export const renderResetPassword = ({
  title,
  tokenUrl,
  tokenExpires,
  publicUrl
}) => {
  const css = `${publicUrl}email.css`
  return renderer
    .render(reset, { title, tokenUrl, tokenExpires, publicUrl, css })
    .then(result => {
      if (process.env.NODE_ENV === 'development') {
        previewEmail({ to: '', from: '', subject: 'subject', html: result })
      }

      return result
    })
    .catch(err => {
      Logger.error(err)
    })
}
