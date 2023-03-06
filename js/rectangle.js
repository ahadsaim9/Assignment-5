document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleWValue = getInputFieldValueByFirstId("rectangle-w");

  const rectangleWId = document.getElementById("rectangle-w-value");
  rectangleWId.innerText = rectangleWValue;

  const rectangleLValue = getInputFieldValueBySecondId("rectangle-l");

  const rectangleLId = document.getElementById("rectangle-p-value");
  rectangleLId.innerText = rectangleLValue;

  const rectangleAreaIs = rectangleWValue * rectangleLValue;

  const rectangleAreaValue = document.getElementById("rectangle-output-value");
  rectangleAreaValue.innerText = rectangleAreaIs;

  const rectangleOutput = document.getElementById("rectangle-output");
  rectangleOutput.style.display = "block";
  rectangleOutput.style.display = "flex";
});
