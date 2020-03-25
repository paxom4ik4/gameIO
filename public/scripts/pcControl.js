// Экспорт элементов из html
let playerField = document.getElementById("playerField");
let player = document.getElementById("player");
let coordsField = document.getElementById("coords");
let gameField = document.getElementById("gameField");

// Получаем информацию стилей элемента
let gameFieldStyle = window.getComputedStyle(gameField);
let bodyStyles = window.getComputedStyle(document.body);
let playerStyles = window.getComputedStyle(player);

// Функция, вызываемая после зажатия ЛКМ (mousedown)
function mouseDownEvent() {
    addEventListener("mousemove", gameMouse); // Вызывает gameMouse() при движении мыши (mousemove)
}

// Функция, вызываемая после отжатия ЛКМ (mouseUp)
function mouseUpEvent() {
    removeEventListener("mousemove", gameMouse); // Сбрасывает событие, вызываемое движением мыши (mousemove)
    // Мягко говоря, эта функция останавливает движение объекта #player
}

/****************************************************/
/************ События и функции для пуль ************/
let bulTimer;
function createBullet() {
    let bullet = document.createElement("div");
    bullet.setAttribute("id", "bullet");

    let bulletStyles = window.getComputedStyle(bullet);
    let matrix = new WebKitCSSMatrix(playerStyles.webkitTransform);
    let bulletY = 435;
    matrix.e += 43;
    bullet.style.transform = "translate(" + matrix.e  + "px," + bulletY +"px)";
    gameField.append(bullet);
}

function fire(){
    return 100;
}


function setBulletInterval() {
    bulTimer = setInterval(createBullet, 500);
}

function removeBulletInterval() {
    bulTimer = clearInterval(bulTimer);
    //removeEventListener("mousedown", setBulletInterval);
}

/****************************************************/
/****************************************************/
// Главная функция, вызываемая после зажатия ЛКМ и движении мыши (mouseDown + mousemove)
function gameMouse(e) {
    let leftField = parseInt(gameFieldStyle.marginLeft) + 25; // Определяем размер пустого пространства слева
    let rightField = parseInt(bodyStyles.width) - leftField * 2; // Размер слева

    // let matrix = new WebKitCSSMatrix(playerStyles.webkitTransform); // Вытаскиваем из стиля "transform" инфу о расположении #player (translateX)

    //alert(matrix.m41);

    let mouseX = e.clientX - leftField; // вычисляем позицию мыши.
    // Для упрощения отнимаем размер левого поля.
    // Теперь наши координаты мыши начинаются не с 600, а с 0

    // coordsField.innerHTML = mouseX;  // Координаты

    if (mouseX > 0 && mouseX < rightField) {
        // Условие, которое не позволяет выходить из границ игрового поля
        player.style.transform = "translateX(" + mouseX + "px) rotate(-43deg)"; // Если мы в игровом поле, то перемешаем наш #player
    }
    // if (mouseX > matrix + 15) {          // А это недоделаное условие для покачивания #player в сторону курсора. Над ним надо подумать...
    //     player.style.transform = "translateX(" + mouseX + "px) rotate(-30deg)";
    // }
}

// События
addEventListener("mousedown", mouseDownEvent);
addEventListener("mouseup", mouseUpEvent);

addEventListener("mousedown", setBulletInterval);
addEventListener("mouseup", removeBulletInterval);
