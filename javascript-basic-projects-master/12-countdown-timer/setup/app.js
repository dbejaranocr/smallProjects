const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(2022, 2, 12, 3, 45, 0);
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 18, 15, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];

const date = futureDate.getDate();
let dayOfWeek = weekdays[futureDate.getDay()];


giveaway.textContent = `I will finally see you on ${dayOfWeek} ${ordinalSuffixOf(date)}, ${month} ${year} at around ${hours} ${minutes} pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // set values
  const values = [days, hours, minutes, seconds];

  function format() {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  };

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this has expired</h4>`
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


// function to add ordinal suffix
function ordinalSuffixOf(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};