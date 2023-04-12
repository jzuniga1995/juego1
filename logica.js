var car = document.getElementById("car");
var enemy = document.getElementById("enemy");
var score = document.getElementById("score");
var speed = 5;
var scoreCounter = 0;

setInterval(function() {
    moveEnemy();
    checkCollision();
}, 10);

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" && parseInt(car.style.left) > 0) {
        car.style.left = parseInt(car.style.left) - speed + "px";
    }
    else if (event.key === "ArrowRight" && parseInt(car.style.left) < 450) {
        car.style.left = parseInt(car.style.left) + speed + "px";
    }
});

function moveEnemy() {
    enemy.style.top = parseInt(enemy.style.top) + speed + "px";
    if (parseInt(enemy.style.top) > 500) {
        enemy.style.top = "0px";
        enemy.style.left = Math.floor(Math.random() * 400) + "px";
        scoreCounter++;
        score.textContent = scoreCounter;
    }
}

function checkCollision() {
    if (parseInt(car.style.top) <= parseInt(enemy.style.top) + 100 && parseInt(car.style.top) + 100 >= parseInt(enemy.style.top) && parseInt(car.style.left) <= parseInt(enemy.style.left) + 50 && parseInt(car.style.left) + 50 >= parseInt(enemy.style.left)) {
        alert("¡Has perdido! Tu puntuación final es: " + scoreCounter);
        scoreCounter = 0;
        score.textContent = scoreCounter;
    }
}

