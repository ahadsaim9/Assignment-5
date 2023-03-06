document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonPValue = getInputFieldValueByFirstId("pentagon-p");

  const pentagonPSetValue = document.getElementById("pentagon-p-value");
  pentagonPSetValue.innerText = pentagonPValue;

  const pentagonBValue = getInputFieldValueBySecondId("pentagon-b");

  const pentagonBSetValue = document.getElementById("pentagon-b-value");
  pentagonBSetValue.innerText = pentagonBValue;

  const pentagonAreaIs = 0.5 * pentagonPValue * pentagonBValue;

  const pentagonOutputValue = document.getElementById("pentagon-output-value");
  pentagonOutputValue.innerText = pentagonAreaIs;

  const pentagonOutput = document.getElementById("pentagon-output");
  pentagonOutput.style.display = "block";
  pentagonOutput.style.display = "flex";
});
