document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseAValue = getInputFieldValueByFirstId("ellipse-a");

  const ellipseASetValue = document.getElementById("ellipse-a-value");
  ellipseASetValue.innerText = ellipseAValue;

  const ellipseBValue = getInputFieldValueBySecondId("ellipse-b");

  const ellipseBSetValue = document.getElementById("ellipse-b-value");
  ellipseBSetValue.innerText = ellipseBValue;

  const ellipseAreaIs = 3.14 * ellipseAValue * ellipseBValue;

  const ellipseOutputValue = document.getElementById("ellipse-output-value");
  ellipseOutputValue.innerText = ellipseAreaIs;

  const ellipseOutput = document.getElementById("ellipse-output");
  ellipseOutput.style.display = "block";
  ellipseOutput.style.display = "flex";
});
