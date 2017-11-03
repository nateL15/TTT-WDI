'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const userClick = ['', '', '', '', '', '', '', '', '']

let xMove = true

const playTurn = function () {
  for (let i = 1; i < 10; i++) {
    $('#b' + i).on('click', function () {
      if (xMove === true) {
        $('#b' + i).text('X')
        xMove = false
      } else if (xMove === false) {
        $('#b' + i).text('O')
        xMove = true
      }
    })
  }
}

playTurn()

export {
  gameBoard,
  userClick,
  playTurn
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
