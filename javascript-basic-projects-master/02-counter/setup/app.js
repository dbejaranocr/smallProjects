//set initial count 
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    //this checks for whic button was clicked
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        //depending on the button this resets the count, substracts or adds
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        };
        //depending on the value being positve or negative, it changes from
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#102a42';
        };
        value.textContent = count;
    });
});