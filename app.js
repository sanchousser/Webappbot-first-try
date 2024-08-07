// const container = document.querySelector('.container');

// container.addEventListener('click', onContainerClick);

// function onContainerClick(e) {
//     if(e.target.nodeName === 'IMG') {
//         onImageClick()
//     }
// }

// function onContainerClick() {

// }

const userEnemy = document.getElementById('user-enemy');
const userScore = document.getElementById('user-score');


// Получение текущего счета из localStorage и его преобразование в число
let score = parseInt(localStorage.getItem('userScore')) || 0;
if (score >= 20) {
    userEnemy.src = './img/second-level-dragon.jpg';
}

// Обновление отображаемого счета
userScore.textContent = score;

userEnemy.addEventListener('click', onEnemyClick);

function onEnemyClick(e) {
    // Увеличение счета
    score++;
    // Сохранение нового значения счета в localStorage
    localStorage.setItem('userScore', score);
    // Обновление отображаемого счета
    userScore.textContent = score;
    // Проверка условия для смены изображения
}


