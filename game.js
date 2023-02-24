window.onload = function () {
    // select Elements from the dom:
    var begin = document.getElementById('start')
    var finish = document.getElementById('end')
    var walls = document.getElementsByClassName('boundary')
    var statusChange = document.getElementById('status')
    var score = document.getElementById('score')

    // start game
    var gameStarted = false
    begin.addEventListener('mouseenter', startGame)
    function startGame() {
        statusChange.innerHTML = 'The game has started'
        gameStarted = true
        console.log(startGame);
    }

    // losing 
    for (let wall of walls) {
        wall.addEventListener('mouseenter', lostGame)
    }
    function lostGame() {
        if (gameStarted) {
            statusChange.innerHTML = 'You lost! Press S to reset';
            for (let wall of walls) {
                wall.classList.add("youlose");
            }
            console.log(lostGame);
        }
        else if (gameStarted && gameFinished) {
            statusChange.innerHTML = 'You already WON BRO! Start a New game';
            for (let wall of walls) {
                wall.classList.remove("youlose");
            }
            console.log(lostGame);

        }
    }
    // reset
    begin.addEventListener('click', reset)
    function reset() {
        statusChange.innerHTML = 'The game has reset'
        for (let wall of walls) {
            wall.classList.remove("youlose");
        }
        gameStarted = false
        winCount = 0
        score.innerHTML = 'Score: ' + winCount
        console.log(reset);
    }

    // winning (maybe add mouseenter and mouseleave to prevent cheating?)
    var gameFinished = false
    finish.addEventListener('mouseover', win)
    var winCount = 0;
    function win() {
        if (gameStarted) {
            winCount += 10
            statusChange.innerHTML = 'You Won!'
            gameFinished = true
            score.innerHTML = 'Score: ' + winCount

        }
        console.log(win);


    }




}


