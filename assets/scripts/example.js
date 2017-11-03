const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const userClick = ['', '', '', '', '', '', '', '', '']

const playerMove = function () {
  for (let i = 0; i < 9; i++) {
    $('#b' + i).on('click', function () {
      $('#b' + i).html('O')
    })
  }
}

export {
  gameBoard,
  userClick,
  playerMove
}
