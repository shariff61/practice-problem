const doubleBnt = document.getElementById("double");
const inputDouble = document.getElementById("input-double");
const addNumbers = document.getElementById("double-numbers");

doubleBnt.addEventListener("click", function () {
  const inputNumbers = parseFloat(inputDouble.value);
  const totalDoubleNumbers = inputNumbers * inputNumbers;
  const h2 = document.createElement("h2");
  inputDouble.value = "";
  if (isNaN(totalDoubleNumbers)) {
    alert("please provide numbers");
    return;
  }

  h2.innerText = totalDoubleNumbers;

  addNumbers.appendChild(h2);
});
