// --------------Triangle Area calculation------------------

document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleB = getInputFieldValueByFirstId("triangle-b");
  const triangleFirstValue = triangleB;

  const setTriangleFirstValue = document.getElementById("triangle-b-value");
  setTriangleFirstValue.innerText = triangleFirstValue;

  const triangleH = getInputFieldValueBySecondId("triangle-h");
  triangleSecondValue = triangleH;

  setTriangleSecondValue = document.getElementById("triangle-h-value");
  setTriangleSecondValue.innerText = triangleH;

  const triangleAreaIs = 0.5 * triangleFirstValue * triangleSecondValue;

  const triangleOutputValue = document.getElementById("triangle-output-value");
  triangleOutputValue.innerText = triangleAreaIs;

  const triangleOutput = document.getElementById("triangle-output");
  triangleOutput.style.display = "block";
  triangleOutput.style.display = "flex";    

  // clare
});
