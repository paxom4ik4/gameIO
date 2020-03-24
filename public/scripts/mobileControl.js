// let playerField = document.getElementById("playerField");
// let player = document.getElementById("player");
// let coordsField = document.getElementById("coords");
// let gameField = document.getElementById("gameField");

// let gameFieldStyle = window.getComputedStyle(gameField);
// let bodyStyles = window.getComputedStyle(document.body);
// let playerStyles = window.getComputedStyle(player);

function mouseDownEvent() {
    addEventListener("touchmove", gameTouch);
}

function mouseUpEvent() {
    removeEventListener("touchmove", gameTouch);
}

function gameTouch(e) {
    let leftField = parseInt(gameFieldStyle.marginLeft) + 25;
    let rightField = parseInt(bodyStyles.width) - leftField * 2;

    let mouseX = e.changedTouches[0].pageX - leftField;

    coordsField.innerHTML = mouseX;

    if (mouseX > 0 && mouseX < rightField)
        player.style.transform = "translateX(" + mouseX + "px)";
}

addEventListener("touchstart", mouseDownEvent);
addEventListener("touchend", mouseUpEvent);
