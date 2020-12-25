
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','E','F'];
const body = document.querySelector('.container');
const hexColor = document.querySelector('.color-hex');


document.addEventListener('keydown', event => {

    if (event.key === ' ') {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            hex += arr[getRandomNumber()];
        }

        body.style.backgroundColor = hex;
        hexColor.textContent = hex;
    }

});

function getRandomNumber() {
    return Math.trunc(Math.random() * arr.length);

}
