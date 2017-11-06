'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.SignOut()
    .then(ui.SignOutSuccesss)
    .catch(ui.SignOutFailure)
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers

}