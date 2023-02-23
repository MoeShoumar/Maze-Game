window.onload = function () {
    // select Elements from the dom:
    var begin = document.getElementById('start')
    var finish = document.getElementById('end')
    var walls = document.getElementsByClassName('boundary')
    var statusChange = document.getElementById('status')
    // reset the walls color and timer:

    // begin.addEventListener('click', reset)
    // function reset() {
    //     document.getElementsByClassName('boundary').reset();
    //     // document.getElementsByClassName('timer').reset();
    // }

    // start game
    begin.addEventListener('mouseover', startGame)
    function startGame() {
        statusChange.innerHTML = 'The game has started'
    }
    // losing
    for (let wall of walls) {
        wall.addEventListener('mouseenter', lostGame)
    }
    function lostGame() {
        statusChange.innerHTML = 'You lost!';
        for (let wall of walls) {
            wall.style.backgroundColor = 'red';
        }
    }
    // Winning

}













