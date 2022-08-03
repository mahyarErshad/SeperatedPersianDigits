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
  if (input.value) {
    const number = input.value;
    const newNumber = separateNumber(number);
    screen.innerHTML = newNumber;
    input.value = "";
  } else {
    screen.innerHTML = "Input can't be empty";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && input.value) {
    const number = input.value;
    const newNumber = separateNumber(number);
    screen.innerHTML = newNumber;
    input.value = "";
  } else if (e.keyCode === 13 && !input.value) {
    screen.innerHTML = "Input can't be empty";
  }
});
