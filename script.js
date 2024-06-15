const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const tryBtn = document.querySelector('#tryBtn');
const playAgainBtn = document.querySelector('#playAgainBtn');

let randomNum = Math.round((Math.random() * 10));
let attempts = 0;

/* Events */
function handleTryClick(e) {
    e.preventDefault();

    attempts++;
    const inputNum = document.getElementById('inputNumber');
    
    if(randomNum === Number(inputNum.value)) {
        screen1.classList.add('hide');
        document.querySelector('.screen2 h2').innerText = `Acertou em ${attempts} tentativas!`;
        screen2.classList.remove('hide');
    }

    inputNum.value = "";
}

function handlePlayAgain() {
    attempts = 0;
    randomNum = Math.round((Math.random() * 10));

    screen2.classList.add('hide');
    screen1.classList.remove('hide');
}

tryBtn.addEventListener('click', handleTryClick);
playAgainBtn.addEventListener('click', handlePlayAgain);
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handlePlayAgain();
    }
});