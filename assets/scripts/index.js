
'use strict'
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')

const stopClick = function () {
  $('.box').off('click')
}

let userClick = ['', '', '', '', '', '', '', '', '']

let xMove = true

const playTurn = function () {
  for (let i = 1; i < 10; i++) {
    $('#b' + i).on('click', function () {
      if ($('#b' + i).text() === '') {
        if (xMove === true) {
          $('#b' + i).text('X')
          xMove = false
          userClick.splice((i - 1), 1, 'X')
          console.log(userClick)
          checkDraw()
          checkWin()
        } else if (xMove === false) {
          $('#b' + i).text('O')
          userClick.splice((i - 1), 1, 'O')
          xMove = true
          console.log(userClick)
          checkDraw()
          checkWin()
        }
      }
    })
  }
}

$(() => {
  setAPIOrigin(location, config)
  events.addHandlers()
  playTurn()
})

stopClick()

const checkWin = function () {
  if ((userClick[0] === userClick[1] && userClick[1] === userClick[2]) && (userClick[0] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[1] + ' wins!')
  } else if ((userClick[3] === userClick[4] && userClick[4] === userClick[5]) && (userClick[3] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[3] + ' wins!')
  } else if ((userClick[6] === userClick[7] && userClick[7] === userClick[8]) && (userClick[6] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[6] + ' wins!')
  } else if ((userClick[0] === userClick[3] && userClick[3] === userClick[6]) && (userClick[0] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[0] + ' wins!')
  } else if ((userClick[1] === userClick[4] && userClick[4] === userClick[7]) && (userClick[1] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[1] + ' wins!')
  } else if ((userClick[2] === userClick[5] && userClick[5] === userClick[8]) && (userClick[2] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[2] + ' wins!')
  } else if ((userClick[0] === userClick[4] && userClick[4] === userClick[8]) && (userClick[0] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[0] + ' wins!')
  } else if ((userClick[2] === userClick[4] && userClick[4] === userClick[6]) && (userClick[2] !== '')) {
    stopClick()
    $('#alertWin').text(userClick[2] + ' wins!')
  }
}

const checkFull = function (element, index, array) {
  return element !== ''
}

const checkDraw = function () {
  if (userClick.every(checkFull)) {
    $('#alertWin').text('It\'s a draw!')
    stopClick()
  }
}

const clearBoard = function () {
  for (let i = 1; i < 10; i++) {
    $('#b' + i).text('')
  }
}

const clearWin = function () {
  $('#alertWin').text('')
}

const newGame = function () {
  $('#r').on('click', function () {
    userClick = ['', '', '', '', '', '', '', '', '']
    clearBoard()
    clearWin()
    playTurn()
  })
}
newGame()
playTurn()

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
