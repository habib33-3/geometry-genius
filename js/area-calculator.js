function calculateTriangleArea() {
  //    Get Triangle base value
  const baseField = document.getElementById("triangle-base");
  const base = parseFloat(baseField.value);

  //  Get Triangle height value
  const heightField = document.getElementById("triangle-height");
  const height = parseFloat(heightField.value);

  const area = 0.5 * base * height;

  //   Show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

function calculateRectangleArea() {
  //    Get Rectangle base value
  const widthField = document.getElementById("rectangle-width");
  const width = parseFloat(widthField.value);

  //  Get Rectangle height value
  const heightField = document.getElementById("rectangle-length");
  const height = parseFloat(heightField.value);

  const area = width * height;

  //   Show Rectangle area
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  const area = base * height;

  setElementInnerText("parallelogram-area", area);
}

function calculateEllipseArea() {
  const major = getInputValue("ellipse-major-radius");
  const minor = getInputValue("ellipse-minor-radius");

  const area = 3.1416 * major * minor;

  setElementInnerText("ellipse-area", area);
}

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const value = parseFloat(inputField.value);

  return value;
}

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
