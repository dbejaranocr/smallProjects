const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //create the hex value to genrate the new color
    let hexColor = '#';
    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumb()];
    };
    console.log(hexColor);
    // //changes the background color to the created one
    document.body.style.backgroundColor = hexColor;
    // //changes text to the created value
    color.textContent = hexColor;
});

function getRandomNumb() { return Math.floor(Math.random() * hex.length); }; 