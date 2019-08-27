/**
 * This file provides an emailing capability using sendgrid mail.
 */

import sgMail from '@sendgrid/mail'
import { renderInvitation, renderResetPassword } from './templates'
import moment from 'moment'

const FORGOT_PASSWORD_SUBJECT = 'Unohtuneen salasanan asettaminen'
const ACTIVATE_SUBJECT = 'Kutsu palveluun'

let config = {}
let $publicUrl = ''

const emailer = {
  /**
   * Initialises the emailer. This has to be called before any
   * emails can be sent.
   *
   * @param {Object} options Sets the options for the emailer
   */
  initEmailer({ apiKey, senderEmail, publicUrl }) {
    sgMail.setApiKey(apiKey)
    config.from = senderEmail
    $publicUrl = publicUrl
  },

  /**
   * Sends a password reset token to an already verified account.
   *
   * @param {String} email The user's email
   * @param {Object} resetToken The reset token object to be sent
   */
  sendResetToken(email, resetToken) {
    const tokenUrl = `${$publicUrl}reset-password/${resetToken._id}`
    renderResetPassword({
      title: FORGOT_PASSWORD_SUBJECT,
      publicUrl: $publicUrl,
      tokenUrl,
      tokenExpires: moment(resetToken.expiresAt).format('LLL')
    }).then(html => {
      const data = {
        ...config,
        to: email,
        subject: FORGOT_PASSWORD_SUBJECT,
        html
      }

      sgMail.send(data)
    })
  },

  /**
   * Sends an invitation to a new user who has not yet verified their
   * account.
   *
   * @param {String} email The user's email
   * @param {Object} resetToken The reset token object to be sent
   */
  sendInvitation(email, resetToken) {
    const tokenUrl = `${$publicUrl}activate/${resetToken._id}`
    renderInvitation({
      title: ACTIVATE_SUBJECT,
      publicUrl: $publicUrl,
      tokenUrl,
      tokenExpires: moment(resetToken.expiresAt).format('LLL')
    }).then(html => {
      const data = {
        ...config,
        to: email,
        subject: ACTIVATE_SUBJECT,
        html
      }

      sgMail.send(data)
    })
  }
}

export default emailer
