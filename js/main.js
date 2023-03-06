// **********function*******************
function getInputFieldValueByFirstId(firstId) {
  const inputFindFirstId = document.getElementById(firstId);
  const inputFindFirstString = inputFindFirstId.value;
  const inputFindFirstValue = parseFloat(inputFindFirstString);

  return inputFindFirstValue;
}
function getInputFieldValueBySecondId(secondId) {
  const inputFindSecondId = document.getElementById(secondId);
  const inputFindSecondString = inputFindSecondId.value;
  const inputFindSecondValue = parseFloat(inputFindSecondString);
  return inputFindSecondValue;
}

