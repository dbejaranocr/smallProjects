const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //gets a random number 0 - 3
    const randomNumber = getRandomNumb();
    //changes the background color to the one selected in the "colors" variable
    document.body.style.backgroundColor = colors[randomNumber];
    //changes text to the selected value
    color.textContent = colors[randomNumber];
});

function getRandomNumb() { return Math.floor(Math.random() * colors.length); }; 