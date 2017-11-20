'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const storeGame = function (event) {
  const data = store.gamePlayed
  api.createGame(data)
    .then(ui.gameStoredSuccess)
    .catch(ui.gameStoredFailure)
}

const newGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.startNewGame)
    .catch(ui.startNewGameFailure)
}

const gamePlayed = function () {
  api.gamesPlayed()
    .then(ui.getGamesPlayed)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#getGames').on('submit', gamePlayed)
  $('#r').on('submit', newGame)
}

module.exports = {
  addHandlers,
  onChangePassword,
  gamePlayed,
  storeGame,
  onSignOut,
  onSignIn,
  getFormFields,
  onSignUp,
  newGame

}
