'use strict'

const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')

// on sign up
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// on sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(event)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// on change password
const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// on sign out
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const storeGame = function (event) {
//   const data = store.gamePlayed
//   api.createGame(data)
//     .then(ui.gameStoredSuccess)
//     .catch(ui.gameStoredFailure)
// }

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

// event handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#getGames').on('submit', gamePlayed)
  $('#r').on('submit', newGame)
}

module.exports = {
  addHandlers,
  onChangePassword,
  gamePlayed,
  // storeGame,
  onSignOut,
  onSignIn,
  getFormFields,
  onSignUp,
  newGame

}
