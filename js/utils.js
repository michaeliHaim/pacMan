'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    // const elCell = document.querySelector(`[data-i="${location.i}"][data-j="${location.j}"]`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function createCherries() {
    clearInterval(gIntervalCherries)
    gIntervalCherries = setInterval(addCherry, 15000)
}


function getRandomEmptyCellPosition() {
    const emptyCells = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            const cell = gBoard[i][j]
            if (cell === EMPTY) emptyCells.push({ i, j })
        }
    }

    if (!emptyCells.length) return null

    const randIdx = getRandomIntInclusive(0, emptyCells.length - 1)
    return emptyCells[randIdx]
}

function btnGameOverModal() {

    var elBtn = document.querySelector('.restart')
    elBtn.style.display = 'block'

}

function btnShowVictoryModal() {
    const elVictoriousModal = document.getElementById('victoriousModal')
    elVictoriousModal.style.display = 'block'

}

function playAgainBtn() {

    const elVictoriousModal = document.getElementById('victoriousModal')
    elVictoriousModal.style.display = 'none'

    const elPlayAgainBtn = document.querySelector('.restart');
    elPlayAgainBtn.style.display = 'none'
    init()

}

function setScore() {
    const elScore = document.querySelector('h2 span')
    elScore.innerText = gGame.score

}