var myElement = document.getElementById('player');
var score = document.getElementById('score');
var timer = document.getElementById('time');
let clickEnabled = true;

// cvladi realscore udirs nuls
var realScore = 0;

let currentScale = 0;

myElement.addEventListener('click', function () {
    if (!clickEnabled) {
        return;
    }
    // tu clickenabled aris true value sheasrule es btdzaneba

    //
    var randomScale = Math.floor(Math.random() * 30);

    // tu random scale naklebia atze gaxade is 30
    if (randomScale < 10) {
        randomScale = 30;
        player.style.width = randomScale + 'px';
        player.style.height = randomScale + 'px';
    }

    // tu curentscale araris nuli da naklebia ocze sheasrule es brdzaneba
    if (currentScale && currentScale < 20) {
        realScore += 2;
    } else {
        realScore++;
    }

    //mimdinare qula udris shemtxvevit qulas
    currentScale = randomScale;

    score.textContent = 'Score ' + realScore;

    var RandomPosX = Math.floor(Math.random() * 600);
    var RandomPosY = Math.floor(Math.random() * 550);

    player.style.marginLeft = RandomPosX + 'px';
    player.style.marginTop = RandomPosY + 'px';
    player.style.width = randomScale + 'px';
    player.style.height = randomScale + 'px';


});


let intervalCounter = 1000;
var realTimer = 30;

var interval = setInterval(startTimer, intervalCounter);

function startTimer() {
    realTimer = realTimer - 1;
    timer.textContent = 'Time Remaining ' + realTimer;

    if (realTimer <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(interval);
    clickEnabled = false;
    Swal.fire("Oops, time out! You Lose :)");
}

let replayButton = document.getElementById('replay-button');

replayButton.addEventListener('click', function() {
    clickEnabled = true;
    realScore = 0;
    score.textContent = 'Score ' + realScore;
    realTimer = 30;
    interval = setInterval(startTimer, intervalCounter);
})






