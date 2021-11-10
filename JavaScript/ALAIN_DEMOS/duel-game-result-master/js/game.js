var players = [{}, {}];
var game_started = false;
var shooting_enabled = false;
var start_shooting_timeout;

window.onload = function () {
    players[0].output = document.getElementById("p1output");
    players[0].wins = document.getElementById("p1wins");
    players[1].output = document.getElementById("p2output");
    players[1].wins = document.getElementById("p2wins");

    restart_button = document.getElementById("restart-button");
    restart_button.onclick = restart_game;

    start_game();
}

function start_game() {
    console.log("starting the game");

    players[0].output.innerHTML =
        players[1].output.innerHTML = "Please, wait for the signal";

    shooting_enabled = false;
    game_started = true;

    start_shooting_timeout = setTimeout(
        function () { start_shooting(); },
        getRandomInt(2000, 5000)
    );
}

function start_shooting() {
    shooting_enabled = true;
    players[0].output.innerHTML = players[1].output.innerHTML = "Now!";
}

document.onkeydown = function (evt) {
    console.log(evt);
    if (game_started) {
        game_started = false;
        if (evt.key == "f") {
            player_shoot(0, 1);
        } else if (evt.key == "j") {
            player_shoot(1, 0);
        }
    }
}

function player_shoot(shooter, shooted) {
    if (shooting_enabled) {
        // OK
        players[shooter].output.innerHTML = "You win! :)";
        players[shooter].wins.innerHTML =
            parseInt(players[shooter].wins.innerHTML, 10) + 1;
        players[shooted].output.innerHTML = "You lose! :(";
    } else {
        // Too soon
        clearTimeout(start_shooting_timeout);
        players[shooter].output.innerHTML = "No way, too soon! You lose!";
        players[shooted].output.innerHTML = "You win! The other player shoot too soon.";
        players[shooted].wins.innerHTML =
            parseInt(players[shooted].wins.innerHTML, 10) + 1;
    }

    setTimeout(function () { start_game() }, 2000);
}

function restart_game() {
    clearTimeout(start_shooting_timeout);
    players[0].wins.innerHTML = players[1].wins.innerHTML = 0;
    /*document.getElementById("p1wins").innerHTML = 0;
    document.getElementById("p2wins").innerHTML = 0;*/
    start_game();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
