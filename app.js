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

let score = 0;

userEnemy.addEventListener('click', onEnemyClick);

function onEnemyClick(e) {
    score++;
    userScore.textContent = score
    if (score >= 20) {
        userEnemy.src = './img/second-level-dragon.jpg'
    }
}

