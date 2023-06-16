
var resultField = document.getElementById("result");


function append(value) {
  resultField.value += value;
}

function calculate() {
    resultField.value = eval(resultField.value);
}

function clearInput() {
  resultField.value = "";
}
