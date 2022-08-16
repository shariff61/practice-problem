const tripleBtn = document.querySelector("#triple");
const inputTriple = document.querySelector("#input-triple");
const tripleNumbers = document.querySelector("#triple-numbers");

tripleBtn.addEventListener("click", function () {
  const inputTripleNumbers = parseFloat(inputTriple.value);

  const totalInputTripleNumbers =
    inputTripleNumbers * inputTripleNumbers * inputTripleNumbers;
  inputTriple.value = "";
  if (isNaN(totalInputTripleNumbers)) {
    alert("please provide numbers");
    return;
  }

  const h3 = document.createElement("h3");
  h3.innerText = totalInputTripleNumbers;
  tripleNumbers.appendChild(h3);
});
