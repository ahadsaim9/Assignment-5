document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramBValue = getInputFieldValueByFirstId("parallelogram-b");

    const parallelogramBId = document.getElementById("parallelogram-b-value");
    parallelogramBId.innerText = parallelogramBValue;

    const parallelogramHValue = getInputFieldValueBySecondId("parallelogram-h");
    const parallelogramHId = document.getElementById("parallelogram-h-value");
    parallelogramHId.innerText = parallelogramHValue;

    const parallelogramAreaIs = parallelogramBValue * parallelogramHValue;

    const parallelogramOutputValue = document.getElementById(
      "parallelogram-output-value"
    );
    parallelogramOutputValue.innerText = parallelogramAreaIs;

    const parallelogramOutput =document.getElementById("parallelogram-output");
    parallelogramOutput.style.display = "block"
    parallelogramOutput.style.display = "flex"

  });
