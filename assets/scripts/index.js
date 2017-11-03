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
      if ($('#b' + i).text() === '') {
        if (xMove === true) {
          $('#b' + i).text('X')
          xMove = false
          userClick.splice((i - 1), 1, 'X')
          console.log(userClick)
        } else if (xMove === false) {
          $('#b' + i).text('O')
          userClick.splice((i - 1), 1, 'O')
          xMove = true
          console.log(userClick)
        }
      } else {
        console.log('wrong move')
      }
    })
  }
}

// function reset ()

//   for (let i = 1; i < 10; i++) {
// $('#b' + i)
// $('#b') = []
//   }
// }
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
