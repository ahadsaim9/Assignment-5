document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusD1Value = getInputFieldValueByFirstId("rhombus-d1");

  const rhombusD1SetValue = document.getElementById("rhombus-d1-value");
  rhombusD1SetValue.innerText = rhombusD1Value;

  const rhombusD2Value = getInputFieldValueBySecondId("rhombus-d2");

  const rhombusD2SetValue = document.getElementById("rhombus-d2-value");
  rhombusD2SetValue.innerText = rhombusD2Value;

  const rhombusAreaIs = 0.5 * rhombusD1Value * rhombusD2Value;

  const rhombusOutputValue = document.getElementById("rhombus-output-value");
  rhombusOutputValue.innerText = rhombusAreaIs;

  const rhombusOutput = document.getElementById("rhombus-output");
  rhombusOutput.style.display = "block";
  rhombusOutput.style.display = "flex";
});
