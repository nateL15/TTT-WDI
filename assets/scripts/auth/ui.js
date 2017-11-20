'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up succesfully')
}

const signInSuccess = function (data) {
  console.log('data is ', data)
  store.user = data.user
  console.log('store is ', store)
  $('#message').text('Signed in succesfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('Changed password succesfully')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on change password')
}

const signOutSuccesss = function (data) {
  console.log(data)
  $('#message').text('Signed Out Successfully')
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on Sign Out')
}

const startNewGame = function (data) {
  store.user.game = data.games
  $('#message').text('New game started!')
}

const startNewGameFailure = function (error) {
  console.log(error)
  $('#message').text('Failed to start new game!')
}

const getGamesPlayed = function (data) {
  store.user.game = data.game
  $('#message').text(data.games.length + ' games played!')
}

const getGamesFailure = function (error) {
  console.log(error)
  $('#message').text('Error retrieving Games Played')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  startNewGame,
  startNewGameFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccesss,
  signOutFailure,
  getGamesPlayed,
  getGamesFailure,
  signInSuccess
}
