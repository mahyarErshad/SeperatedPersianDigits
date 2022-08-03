// variables
const input = document.getElementById("input");
const button = document.getElementById("btn");
const screen = document.getElementById("screen");

// functions
const persian = (number) => {
  const persian = number.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return persian;
};
function separateNumber(number) {
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  newNumber = persian(newNumber);
  return newNumber;
}

// events
button.addEventListener("click", (e) => {
  const number = input.value;
  const newNumber = separateNumber(number);
  screen.innerHTML = newNumber;
});
