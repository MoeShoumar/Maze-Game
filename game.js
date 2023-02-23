window.onload = function () {
    // select Elements from the dom:
    var begin = document.getElementById('start')
    var finish = document.getElementById('end')
    var walls = document.getElementsByClassName('boundary')
    var statusChange = document.getElementById('status')

    // start game
    var gameStarted = false
    begin.addEventListener('mouseover', startGame)
    function startGame() {
        statusChange.innerHTML = 'The game has started'
        gameStarted = true
    }
    // reset
    begin.addEventListener('click', reset)
    function reset() {
        statusChange.innerHTML = 'The game has reset'
        for (let wall of walls) {
            wall.classList.remove("youlose");
        }
        gameStarted = true
    }

    // losing 
    for (let wall of walls) {
        wall.addEventListener('mouseenter', lostGame)
    }
    function lostGame() {
        if (gameStarted) {
            statusChange.innerHTML = 'You lost!';
            for (let wall of walls) {
                wall.classList.add("youlose");
            }
        }
    }
    // winning (maybe add mouseenter and mouseleave to prevent cheating?)
    finish.addEventListener('mouseover', win)
    function win() {
        if (gameStarted) {
            statusChange.innerHTML = 'You Won!'
        }
    }
    // 


}













